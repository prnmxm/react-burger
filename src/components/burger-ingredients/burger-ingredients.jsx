import React from 'react'
import {Tab} from '../tab'
import style from './burger-ingredients.module.scss';
import { Ingredients } from '../ingredients'
import { category } from '../../utils/constants';
import { useSelector, shallowEqual } from 'react-redux';

function BurgerIngredients () {
    const {items} = useSelector(store => ({
        items: store.ingredients.items,
    }),shallowEqual)
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
    return (
        <div className={`${style.container}`}>
            <h1 className={`text text_type_main-large ${style.title}`}>Соберите бургер</h1>
            <div className={`mb-5`}>
                <Tab items={categoryList}/>
            </div>
            <Ingredients items={sortToArray}/>
        </div> 
    )
}

export default BurgerIngredients;