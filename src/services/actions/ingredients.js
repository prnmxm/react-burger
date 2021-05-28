import { apiUrl } from '../../utils/constants';
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';
export const INGREDIENTS_SELECTED_CLEAR = 'INGREDIENTS_SELECTED_CLEAR';
export const INGREDIENTS_ADD = 'INGREDIENTS_ADD';
export const INGREDIENTS_REMOVE = 'INGREDIENTS_REMOVE';

export const getIngredients = () => (dispatch) => {
    dispatch({
        type: GET_INGREDIENTS_REQUEST,
    })
    fetch(apiUrl)
    .then(e=> {
        if(e.ok) {
            return e.json();
          }
        return Promise.reject(e)
    })
    .then((e)=> {
        const modData = e.data.map( e => {
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