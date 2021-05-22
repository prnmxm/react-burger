import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientsSelected} from '../ingredients-selected'
import style from './burger-constructor.module.scss';
import {OrderDetails} from '../order-details'
import { IngredientsContext } from '../../services/IngredientsContext';
import { ModalContext } from '../../services/ModalContext';

function BurgerConstructor () {
    const {data: {main: selected}} = useContext(IngredientsContext)
    const items = selected.filter( e => e.selected);
    const price = React.useMemo(()=>items.reduce((acc,cur) => {
        return acc+cur.price
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
            }
        </div> 
    )
}

export default BurgerConstructor;