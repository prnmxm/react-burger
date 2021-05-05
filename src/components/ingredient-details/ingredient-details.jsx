import style from './ingredient-details.module.scss'
function IngredientDetails(props) {
    return (
        <div className={style.order}>
            <img src={props.image}/>
            <h3 >{props.name}</h3>
            <p className="text text_type_main-default">{props.desc}</p>
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
export default IngredientDetails;