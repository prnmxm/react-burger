import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { tabsReducer } from './tabs'

export const rootReducer = combineReducers({ingredients:ingredientsReducer, tabs:tabsReducer})