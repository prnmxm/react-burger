import { OrderDetails } from "../../components/order-details"
import { AppDispatch, AppThunk } from '../../types';
import { INGREDIENTS_SELECTED_CLEAR } from "./ingredients"
import { OPEN_MODAL } from "./modal"
import { getCookie } from '../../utils/fn'
export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = "GET_ORDER_REQUEST"
export const GET_ORDER_SUCCES: 'GET_ORDER_SUCCES' = "GET_ORDER_SUCCES"
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = "GET_ORDER_FAILED"
export interface IGETORDERREQUEST {
    readonly type: typeof GET_ORDER_REQUEST;
}
export interface IGETORDERSUCCES {
    readonly type: typeof GET_ORDER_SUCCES;
    readonly payload: number;
}
export interface GETORDERFAILED {
    readonly type: typeof GET_ORDER_FAILED;
}
export type TOrderAction =
  | IGETORDERREQUEST
  | IGETORDERSUCCES
  | GETORDERFAILED;
export const getOrder = (ingredients:AppThunk) => (dispatch:AppDispatch) => {
    dispatch({
        type: GET_ORDER_REQUEST
    })
    fetch('https://norma.nomoreparties.space/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('token'),
        },
        body: JSON.stringify({ingredients})
    })
    .then(e => {
        if(e.ok) {
            return e.json();
          }
        return Promise.reject(e)
    })
    .then(e => {
        dispatch({
            type: GET_ORDER_SUCCES, 
            payload: {
                content: e.order.number
            }
        })
        dispatch({
            type: OPEN_MODAL, 
            payload: {
                content: <OrderDetails number={e.order.number}/>
            }
        })
        dispatch({
            type: INGREDIENTS_SELECTED_CLEAR
        })
    }).catch(e => {
        dispatch({
            type: GET_ORDER_FAILED
        })
    })
}