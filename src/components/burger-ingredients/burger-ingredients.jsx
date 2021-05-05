import React from 'react'
import PropTypes from 'prop-types'
import {Tab} from '../tab'
import style from './burger-ingredients.module.scss';
import { Ingredients } from '../ingredients'
import { category } from '../../utils/constants';
import { IngredientDetails } from '../ingredient-details'
function BurgerIngredients ({items, setModal}) {
    const checkCategory = (text) => {
        const item = category.find((e) => e.name === text);
        if (item) {
          return item.title;
        }
        throw new Error('No category');
    }
    const sort = React.useMemo(() => {
        return items.reduce( (acc, cur) => {
            const data = acc;
            if(!data[cur.type]) {
                data[cur.type] = [];
            } 
            data[cur.type].push(cur)
            return data;
        }, {})
    }, [items])
    const sortToArray = React.useMemo(() => {
        const arr =[];
        for (const item in sort) {
            const data = {
                category: checkCategory(item) ,
                items: sort[item]
            }
            arr.push(data)
        }
        return arr
    }, [items])
    const categoryList = React.useMemo(()=> sortToArray.map(e => e.category), [items]);
    const showItem = React.useCallback((event) => {
        const target = event.target.closest('[data-id]');
        if(!target) return;
        const id = target.dataset.id
        const item = items.find(e=> e._id === id);
        setModal({
            isShow: true,
            title: 'Детали ингредиента',
            content: <IngredientDetails 
            image={item.image} 
            name={item.name} 
            desc={'Превосходное описание'} 
            calories={123} 
            proteins={123} 
            fats={123}
            carbohydrates={123}
            />
        })
    },[])
    return (
        <div className={`${style.container}`} onClick={showItem}>
            <h1 className={`text text_type_main-large ${style.title}`}>Соберите бургер</h1>
            <div className={`mb-5`}>
                <Tab items={categoryList}/>
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