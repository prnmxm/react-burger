import PropTypes from 'prop-types'
import {Tab} from '../tab'
import style from './burger-ingredients.module.scss';
import { Ingredients } from '../ingredients'
import { checkCategory } from '../../utils/checkCategory'

function BurgerIngredients ({items}) {
    const sort = items.reduce( (acc, cur) => {
        const data = acc;
        if(!data[cur.type]) {
            data[cur.type] = [];
        } 
        data[cur.type].push(cur)
        return data;
    }, {})
    const sortToArray = [];
    for (const item in sort) {
            const data = {
                category: checkCategory(item) ,
                items: sort[item]
            }
            sortToArray.push(data)
    }
    const category = sortToArray.map(e => e.category);

    return (
        <div className={`${style.container}`}>
            <h1 className={`text text_type_main-large ${style.title}`}>Соберите бургер</h1>
            <div className={`mb-5`}>
                <Tab items={category}/>
            </div>
            <Ingredients items={sortToArray}/>
        </div> 
    )
}
BurgerIngredients.propTypes = {
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
export default BurgerIngredients;