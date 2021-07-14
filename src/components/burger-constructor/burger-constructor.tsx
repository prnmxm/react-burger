import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientsSelected} from '../ingredients-selected'
import style from './burger-constructor.module.scss';
import { shallowEqual} from 'react-redux';
import { getOrder } from '../../services/actions/order'
import { push } from 'connected-react-router';
import { useSelector, useDispatch } from '../../hooks';

function BurgerConstructor () {
    const dispatch = useDispatch();
    const token = localStorage.getItem('refreshToken')
    const {selected, isDisabledOrder} = useSelector((store) => ({
        selected: store.ingredients.selected,
        isDisabledOrder: store.ingredients.isDisabledOrder,
    }),shallowEqual)
    const price = selected.reduce((acc: number,cur: {price: number}) => {
        return acc + cur.price;
    },0)
    function click(): void {
        if (token) {
            dispatch(getOrder(selected.map( (e: {_id: string}) => e._id)));
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