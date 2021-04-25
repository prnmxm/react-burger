import PropTypes from 'prop-types'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientsSelected} from '../ingredients-selected'
import style from './burgerConstructor.module.scss';
function BurgerConstructor ({items}) {
    return (
        <div className={style.container}>
            <IngredientsSelected items={items}/>
            <div className={style.footer}>
                <span className={`text text_type_digits-large ${style.price}`}>610 <CurrencyIcon type="primary" /></span>
                <Button type="primary" size="large">
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
}

export default BurgerConstructor;