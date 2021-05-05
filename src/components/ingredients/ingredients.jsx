import { IngredientCategory } from '../ingredient-category'
import style from './ingredients.module.scss'
import PropTypes from 'prop-types'
export default function Ingredients ({items}) {
    return (
        <div className={style.container}>
           { 
                items.map( (e, i) => (
                    <div key={i} className={style.category} data-name={e.category}>
                        <h3 className={`text text_type_main-medium ${style.title} mb-3`}>
                            {e.category}
                        </h3>
                        <IngredientCategory key={e._id} items={e.items}/>
                    </div>
   
                ))
            }
        </div>
    )
} 
Ingredients.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string,
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
            }).isRequired) 
        })
    )}