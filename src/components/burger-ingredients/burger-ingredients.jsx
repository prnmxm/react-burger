import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Tab} from '../tab'
import style from './burger-ingredients.module.scss';
import { Ingredients } from '../ingredients'
import { category } from '../../utils/constants';
import { IngredientDetails } from '../ingredient-details'
import { IngredientsContext } from '../../services/IngredientsContext';
import { ModalContext } from '../../services/ModalContext';

function BurgerIngredients () {
    const {main: items} = useContext(IngredientsContext)
    const setModal = useContext(ModalContext)
    const checkCategory = (text) => {
        const item = category.find((e) => e.name === text);
        if (item) {
          return item.title;
        }
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
        console.log(item);
        setModal({
            isShow: true,
            title: 'Детали ингредиента',
            content: <IngredientDetails 
            image={item.image} 
            name={item.name} 
            desc={'Превосходное описание'} 
            calories={item.calories} 
            proteins={item.proteins} 
            fats={item.fat}
            carbohydrates={item.carbohydrates}
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

export default BurgerIngredients;