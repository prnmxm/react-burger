import done from '../../images/done.png'
import style from './order-details.module.scss';
type TOrderDetails = {
    number: number
}
function OrderDetails({number}:TOrderDetails) {
    return (
        <div className={style.order}>
            <p className="text text_type_digits-medium mb-4">{number}</p>
            <p className="text text_type_main-default mb-4">
                идентификатор заказа
            </p>
            <img src={done} className=" mb-4" alt="doe"/>
            <p className="text text_type_main-small mb-4">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-small text_color_inactive">
                Ваш заказ начали готовить
            </p>
        </div>
    )
}

export default OrderDetails;