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

export default BurgerConstructor;