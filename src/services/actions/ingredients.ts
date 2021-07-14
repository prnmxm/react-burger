import { apiUrl } from '../../utils/constants';
export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR: 'GET_INGREDIENTS_ERROR' = 'GET_INGREDIENTS_ERROR';
export const INGREDIENTS_SELECTED_CLEAR: 'INGREDIENTS_SELECTED_CLEAR' = 'INGREDIENTS_SELECTED_CLEAR';
export const INGREDIENTS_ADD: 'INGREDIENTS_ADD' = 'INGREDIENTS_ADD';
export const INGREDIENTS_REMOVE: 'INGREDIENTS_REMOVE' = 'INGREDIENTS_REMOVE';
export const INGREDIENTS_SELECTED_UPDATE: 'INGREDIENTS_SELECTED_UPDATE' = 'INGREDIENTS_SELECTED_UPDATE';
import { AppDispatch, AppThunk, TIngredient } from '../../types';


export interface IGETINGREDIENTSREQUEST {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGETINGREDIENTSSUCCESS {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly payload: Array<TIngredient>
}
export interface IGETINGREDIENTSERROR {
    readonly type: typeof GET_INGREDIENTS_ERROR;
}
export interface IINGREDIENTSSELECTEDCLEAR {
    readonly type: typeof INGREDIENTS_SELECTED_CLEAR;
}
export interface IINGREDIENTS_ADD {
    readonly type: typeof INGREDIENTS_ADD;
    readonly payload: TIngredient;
}
export interface IINGREDIENTS_REMOVE {
    readonly type: typeof INGREDIENTS_REMOVE;
    readonly payload: {
        _id: string,
        customId: number
    };
}
export interface IINGREDIENTS_SELECTED_UPDATE {
    readonly type: typeof INGREDIENTS_SELECTED_UPDATE;
    readonly payload: {
        readonly to: number,
    readonly from: number,
    }
}
export type TIngredientsActions =
  | IGETINGREDIENTSREQUEST
  | IGETINGREDIENTSSUCCESS
  | IGETINGREDIENTSERROR
  | IINGREDIENTSSELECTEDCLEAR
  | IINGREDIENTS_ADD
  | IINGREDIENTS_REMOVE
  | IINGREDIENTS_SELECTED_UPDATE;

export const getIngredients:AppThunk = () => (dispatch: AppDispatch) => {
    dispatch({
        type: GET_INGREDIENTS_REQUEST,
    })
    fetch(apiUrl, {
        headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
    })
    .then(e=> {
        if(e.ok) {
            return e.json();
          }
        return Promise.reject(e)
    })
    .then((e)=> {
        const modData = e.data.map( (e:any) => {
            return {
                ...e,
                count: 0,
                selected: false,
            }
        })
        dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: modData,
        })
    })
    .catch((e) => {
        dispatch({
            type: GET_INGREDIENTS_ERROR,
        })
    })
}