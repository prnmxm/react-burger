import React from 'react'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientsSelected} from '../ingredients-selected'
import style from './burger-constructor.module.scss';
import {OrderDetails} from '../order-details'
import { ModalContext } from '../../services/ModalContext';
import { useSelector, shallowEqual } from 'react-redux';
import { IngredientsEmpty } from '../ingredients-empty';

function BurgerConstructor () {
    const {selectedItems} = useSelector(store => ({
        selectedItems: store.ingredients.selectedItems,
    }),shallowEqual)
    const setModal = React.useContext(ModalContext)
    const items = selectedItems.filter( e => e.selected);
    const price = React.useMemo(()=>items.reduce((acc,cur) => {
        return acc + cur.price * cur.count;
    },0),[items])
    function click(e) {
        fetch('https://norma.nomoreparties.space/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ingredients: items.map( e => e._id)
            })
        })
        .then(e => {
            if(e.ok) {
                return e.json();
              }
            return Promise.reject(e)
        })
        .then(e => {
            setModal({
                isShow: true,
                content: <OrderDetails number={e.order.number}/>
            })
        })
    }
    return (
        <div className={style.container}>
            {items.length !== 0 &&
                <>
                    <IngredientsSelected items={items}/>
                    <div className={style.footer}>
                        <span className={`text text_type_digits-large ${style.price}`}>{price} 
                        <CurrencyIcon type="primary" /></span>
                        <Button type="primary" size="large" onClick={click}> 
                            Оформить заказ
                        </Button>
                    </div>
                </>
            || <IngredientsEmpty/>}
        </div> 
    )
}

export default BurgerConstructor;