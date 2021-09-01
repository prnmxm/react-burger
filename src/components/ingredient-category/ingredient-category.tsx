import React, { useEffect, FC } from 'react';
import { IngredientMain } from '../ingredient-main'
import style from './ingredient-category.module.scss'
import {TIngredient} from '../../types'; 
type TIngredientCategory = {
    items: Array<TIngredient>
}
export const IngredientCategory = ({items}:TIngredientCategory) => {
    return (
        <div className={style.container}>
            {items.map( (e:TIngredient) => (
                <IngredientMain item={e} key={e._id} />
            ))}
        </div>
    )
} 

