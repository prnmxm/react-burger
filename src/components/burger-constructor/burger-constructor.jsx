import React from 'react'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientsSelected} from '../ingredients-selected'
import style from './burger-constructor.module.scss';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getOrder } from '../../services/actions/order'
import { push } from 'connected-react-router';
function BurgerConstructor () {
    const dispatch = useDispatch();
    const token = localStorage.getItem('refreshToken')
    const {selected, isDisabledOrder, items, orderRquest} = useSelector(store => ({
        selected: store.ingredients.selected,
        isDisabledOrder: store.ingredients.isDisabledOrder,
        items: store.ingredients.items,
        orderRquest: store.order.orderRquest
    }),shallowEqual)
    const price = selected.reduce((acc,cur) => {
        return acc + cur.price;
    },0)
    function click(e) {
        if (token) {
            dispatch(getOrder(selected.map( e => e._id)));
        } else {
            dispatch(push('/login'));
        }

    }
    return (
        <div className={style.container}>
                <>
                    <IngredientsSelected items={selected}/>
                    { selected.length !== 0 &&
                        <div className={style.footer}>
                        <span className={`text text_type_digits-large ${style.price}`}>{price} 
                        <CurrencyIcon type="primary" /></span>
                        {!isDisabledOrder && <Button type="primary" size="large" onClick={click} disable={orderRquest}> 
                            Оформить заказ
                        </Button>}
                    </div>
                    }
                </>
        </div> 
    )
}

export default BurgerConstructor;