import React from 'react'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientsSelected} from '../ingredients-selected'
import style from './burger-constructor.module.scss';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getOrder } from '../../services/actions/order'

function BurgerConstructor () {
    const dispatch = useDispatch();
    const {selected, isDisabledOrder, items, orderRquest} = useSelector(store => ({
        selected: store.ingredients.selected,
        isDisabledOrder: store.ingredients.isDisabledOrder,
        items: store.ingredients.items,
        orderRquest: store.order.orderRquest
    }),shallowEqual)
    const price = React.useMemo(()=>items.reduce((acc,cur) => {
        return acc + cur.price * cur.count;
    },0),[selected])
    function click(e) {
        dispatch(getOrder(selected.map( e => e._id)));
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