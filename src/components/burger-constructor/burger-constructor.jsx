import React from 'react'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientsSelected} from '../ingredients-selected'
import style from './burger-constructor.module.scss';
import {OrderDetails} from '../order-details'
import { ModalContext } from '../../services/ModalContext';
import { useSelector, shallowEqual } from 'react-redux';

function BurgerConstructor () {
    const {selectedItems, isDisabledOrder, items} = useSelector(store => ({
        selectedItems: store.ingredients.selectedItems,
        isDisabledOrder: store.ingredients.isDisabledOrder,
        items: store.ingredients.items
    }),shallowEqual)
    const setModal = React.useContext(ModalContext)
    const price = React.useMemo(()=>items.reduce((acc,cur) => {
        return acc + cur.price * cur.count;
    },0),[selectedItems])
    function click(e) {
        fetch('https://norma.nomoreparties.space/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ingredients: selectedItems.map( e => e._id)
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
                <>
                    <IngredientsSelected items={selectedItems}/>
                    { selectedItems.length !== 0 &&
                        <div className={style.footer}>
                        <span className={`text text_type_digits-large ${style.price}`}>{price} 
                        <CurrencyIcon type="primary" /></span>
                        {!isDisabledOrder && <Button type="primary" size="large" onClick={click}> 
                            Оформить заказ
                        </Button>}
                    </div>
                    }
                </>
        </div> 
    )
}

export default BurgerConstructor;