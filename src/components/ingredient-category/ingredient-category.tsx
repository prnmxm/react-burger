import { IngredientMain } from '../ingredient-main'
import style from './ingredient-category.module.scss'
import PropTypes from 'prop-types'

export default function IngredientCategory ({items}:any) {
    return (
        <div className={style.container}>
            {items.map( (e:any) => (
                <IngredientMain item={e} key={e._id} />
            ))}
        </div>
    )
} 
IngredientCategory.propTypes = {
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
