import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { modalReducer } from './modal';
import { orderReducer } from './order';
import { tabsReducer } from './tabs'

export const rootReducer = combineReducers(
    {
    ingredients:ingredientsReducer, 
    tabs:tabsReducer, 
    modal: modalReducer, 
    order: orderReducer
    }
)