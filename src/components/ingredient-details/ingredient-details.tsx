import style from './ingredient-details.module.scss'
import { shallowEqual } from 'react-redux';
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import { getIngredients } from '../../services/actions/ingredients';
import { useSelector, useDispatch } from '../../hooks';
import { TIngredient } from '../../types'

function IngredientDetails() {
    const dispatch = useDispatch();
    const {items, itemsLoaded} = useSelector((store) => ({
        items: store.ingredients.items,
        itemsLoaded: store.ingredients.itemsLoaded
    }), shallowEqual)
    const {id} = useParams<{ id: string }>();
    const props = items.find( (e:TIngredient) => e._id === id)
    useEffect(() => {
        if (!props) {
            dispatch(getIngredients())
        }
    },[id, dispatch])
    return (
        itemsLoaded && 
 <div className={style.order}>
            <img src={props!.image}/>
            <h3 className={style.title}>{props!.name}</h3>
            <p className={style.desc + ' ' + "text text_type_main-default"}>{props!.desc}</p>
            <div className={style.info}>
                <div className={style.infoItem}>
                    <span className='text text_type_main-small text_color_inactive'>
                        Каллорий, ккал
                    </span>
                    <span className="text text_type_digits-default text_color_inactive">
                        {props!.calories}
                    </span>
                </div>
                <div className={style.infoItem}>
                    <span className='text text_type_main-small text_color_inactive'>
                        Белки, г
                    </span>
                    <span className="text text_type_digits-default text_color_inactive">
                        {props!.proteins}
                    </span>
                </div>
                <div className={style.infoItem}>
                    <span className='text text_type_main-small text_color_inactive'>
                        Жиры, г
                    </span>
                    <span className="text text_type_digits-default text_color_inactive">
                        {props!.fats}
                    </span>
                </div>
                <div className={style.infoItem}>
                    <span className='text text_type_main-small text_color_inactive'>
                        Углеводы, г
                    </span>
                    <span className="text text_type_digits-default text_color_inactive">
                        {props!.carbohydrates}
                    </span>
                </div>
            </div>
        </div> || null
    )
}

export default IngredientDetails;