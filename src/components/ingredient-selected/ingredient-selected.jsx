import React, {useContext} from 'react'
import { CurrencyIcon, LockIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient-selected.module.scss'
import { DeleteIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/delete-icon";
import PropTypes from 'prop-types'
import { IngredientsContext } from '../../services/IngredientsContext';

export default function IngredientSelected ({item, styleClass}) {
    const {setData} = useContext(IngredientsContext)
    const remove = () => {
        setData({
            type: 'remove',
            payload: {
                id: item._id
            }
        })
    }
    return (
        <div className={`${style.item} ${styleClass ? style[styleClass] : ''}`}>
            {
                !styleClass &&
                <div className={style.dragdrop}><DragIcon type="primary" /></div>
            }
            <img src={item.image_mobile} className={style.image} alt={item.name}/>
            <p className={`text text_type_main-default ${style.text}`}>{item.name}</p>
            <span className={`text text_type_digits-default ${style.price}`}>{item.price} <CurrencyIcon type="primary" /></span>
            {
                styleClass ?
                <LockIcon type="secondary" />
                :
                <div className={style.remove} onClick={remove}><DeleteIcon type="primary" /></div>
            }
        </div>
    )
} 
IngredientSelected.propTypes = {
    item: PropTypes.shape({
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
    }).isRequired,
    styleClass: PropTypes.string
}
