import React from 'react'
import PropTypes from 'prop-types'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientsSelected} from '../ingredients-selected'
import style from './burger-constructor.module.scss';
import {OrderDetails} from '../order-details'
function BurgerConstructor ({items, setModal}) {
    const price = React.useMemo(()=>items.reduce((acc,cur) => {
        return acc+cur.price
    },0),[items])
    function click() {
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
BurgerConstructor.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired,
    setModal: PropTypes.func
}

export default BurgerConstructor;