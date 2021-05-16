import style from './ingredient-details.module.scss'
import PropTypes from 'prop-types'

function IngredientDetails(props) {
    return (
        <div className={style.order}>
            <img src={props.image}/>
            <h3 className={style.title}>{props.name}</h3>
            <p className={style.desc + ' ' + "text text_type_main-default"}>{props.desc}</p>
            <div className={style.info}>
                <div className={style.infoItem}>
                    <span className='text text_type_main-small text_color_inactive'>
                        Каллорий, ккал
                    </span>
                    <span className="text text_type_digits-default text_color_inactive">
                        {props.calories}
                    </span>
                </div>
                <div className={style.infoItem}>
                    <span className='text text_type_main-small text_color_inactive'>
                        Белки, г
                    </span>
                    <span className="text text_type_digits-default text_color_inactive">
                        {props.proteins}
                    </span>
                </div>
                <div className={style.infoItem}>
                    <span className='text text_type_main-small text_color_inactive'>
                        Жиры, г
                    </span>
                    <span className="text text_type_digits-default text_color_inactive">
                        {props.fats}
                    </span>
                </div>
                <div className={style.infoItem}>
                    <span className='text text_type_main-small text_color_inactive'>
                        Углеводы, г
                    </span>
                    <span className="text text_type_digits-default text_color_inactive">
                        {props.carbohydrates}
                    </span>
                </div>
            </div>
        </div>
    )
}
IngredientDetails.propTypes = {
    image: PropTypes.string,
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fats: PropTypes.number,
    desc: PropTypes.string,
    proteins: PropTypes.number,
}
export default IngredientDetails;