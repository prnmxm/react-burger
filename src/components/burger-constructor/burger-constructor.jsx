import React from 'react'
import PropTypes from 'prop-types'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientsSelected} from '../ingredients-selected'
import style from './burger-constructor.module.scss';
import {OrderDetails} from '../order-details'
import { IngredientsContext } from '../../services/IngredientsContext';
import { ModalContext } from '../../services/ModalContext';

function BurgerConstructor () {
    const {selected: items} = React.useContext(IngredientsContext)
    const setModal = React.useContext(ModalContext)
    const price = React.useMemo(()=>items.reduce((acc,cur) => {
        return acc+cur.price
    },0),[items])
    function click(e) {
        setModal({
            isShow: true,
            content: <OrderDetails/>
        })
    }
    return (
        <div className={style.container}>
            {items.length !== 0 &&
            <IngredientsSelected items={items}/>}
            <div className={style.footer}>
                <span className={`text text_type_digits-large ${style.price}`}>{price} <CurrencyIcon type="primary" /></span>
                <Button type="primary" size="large" onClick={click}> 
                    Оформить заказ
                </Button>
            </div>
        </div> 
    )
}

export default BurgerConstructor;