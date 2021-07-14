import React, {useContext} from 'react'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient-main.module.scss'
import PropTypes from 'prop-types'
import { IngredientDetails } from '../ingredient-details'
import { useDrag } from "react-dnd";
import { useDispatch } from 'react-redux';
import {TIngredient} from '../../types'; 
import {
    Link, useLocation,
  } from "react-router-dom";
  type TIngredientMain = {
    item: TIngredient
}
export default function IngredientMain ({item}:TIngredientMain) {
    const location = useLocation();
    const [{isDrag},dragRef] = useDrag({
        type: 'product',
        item,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })

    });
    return (
        <Link to={{
            pathname: `/ingredients/${item._id}`,
            state: { background: location }
          }} className={style.link}>
        <div className={`${style.block} mb-5`} ref={dragRef} data-test="product" data-type={item.type === 'bun' && 'bun' || 'main'}>
            <picture className={style.image}>
                <source srcSet={item.image} media="(min-width: 1200px)"/>
                <source srcSet={item.image_large} media="(min-width: 640px)"/>
                <source srcSet={item.image_mobile} media="(max-width: 639px)"/>
                <img src={item.image} alt={item.name}/>
            </picture>
            {item.count !== 0 && <Counter count={item.count && item.count|| 0} size="small" />}
            <span className={`text text_type_digits-small ${style.price}`}>{item.price} <CurrencyIcon type="primary" /></span>
            <p className={`text text_type_main-default ${style.title}`}>{item.name}</p>
        </div>
        </Link>
    )
} 
