// @ts-nocheck
import React, { useCallback } from 'react'
import {Tab} from '../tab'
import style from './burger-ingredients.module.scss';
import { Ingredients } from '../ingredients'
import { category } from '../../utils/constants';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { ADD_ITEMS_TITLE, ADD_ITEMS_REF } from '../../services/actions/tabs'

function BurgerIngredients () {
    const dispatch = useDispatch();
    const {items} = useSelector((store:any) => ({
        items: store.ingredients.items,
    }),shallowEqual)
    const checkCategory = (text:string) => {
        const item = category.find((e) => e.name === text);
        if (item) {
          return item.title;
        }
    }
    const sort = React.useMemo(() => {
        return items.reduce( (acc: any, cur: any) => {
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
    const categoryList = React.useMemo(()=> {
        const arr = sortToArray.map(e => e.category)
        dispatch({
            type: ADD_ITEMS_TITLE,
            payload: arr 
        })
        return arr 
    }, []);

    const refsTabs = useCallback((ref: any, name:any):void => {
        dispatch({
            type: ADD_ITEMS_REF,
            payload: {ref, name}
        })
    }, [])
    return (
        <div className={`${style.container}`}>
            <h1 className={`text text_type_main-large ${style.title}`}>Соберите бургер</h1>
            <div className={`mb-5`}>
                <Tab items={categoryList}/>
            </div>
            <Ingredients items={sortToArray} refsTabs={refsTabs}/>  
        </div> 
    )
}

export default BurgerIngredients;