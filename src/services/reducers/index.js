import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { modalReducer } from './modal';
import { orderReducer } from './order';
import { userReducer } from './user';
import { tabsReducer } from './tabs'
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
export const rootReducer = combineReducers(
    {
    ingredients:ingredientsReducer, 
    tabs:tabsReducer, 
    modal: modalReducer, 
    order: orderReducer,
    user: userReducer,
    router: connectRouter(history),
    }
)
