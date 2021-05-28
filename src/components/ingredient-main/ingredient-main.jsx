import React, {useContext} from 'react'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient-main.module.scss'
import PropTypes from 'prop-types'
import { IngredientDetails } from '../ingredient-details'
import { useDrag } from "react-dnd";
import { useDispatch } from 'react-redux';
import { OPEN_MODAL } from '../../services/actions/modal';
export default function IngredientMain ({item}) {
    const dispatch = useDispatch();
    const [{isDrag},dragRef] = useDrag({
        type: 'product',
        item,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })

    });
    const showItem = React.useCallback((event) => {
        dispatch({
            type: OPEN_MODAL,
            payload: {
                title: 'Детали ингредиента',
                content:  <IngredientDetails 
                    image={item.image} 
                    name={item.name} 
                    desc={'Превосходное описание'} 
                    calories={item.calories} 
                    proteins={item.proteins} 
                    fats={item.fat}
                    carbohydrates={item.carbohydrates}
                    />
            }
        })
    },[])
    return (
        <div className={`${style.block} mb-5`} onClick={()=>{
            showItem();
        }} ref={dragRef}>
            <picture className={style.image}>
                <source srcSet={item.image} media="(min-width: 1200px)"/>
                <source srcSet={item.image_large} media="(min-width: 640px)"/>
                <source srcSet={item.image_mobile} media="(max-width: 639px)"/>
                <img src={item.image} alt={item.name}/>
            </picture>
            {item.count !== 0 && <Counter count={item.count} size="small" />}
            <span className={`text text_type_digits-small ${style.price}`}>{item.price} <CurrencyIcon type="primary" /></span>
            <p className={`text text_type_main-default ${style.title}`}>{item.name}</p>
        </div>
    )
} 
IngredientMain.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        __v: PropTypes.number,
    }).isRequired,
}
