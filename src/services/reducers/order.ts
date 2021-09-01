import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCES, TOrderAction} from '../actions/order'
type TOrderState = {
    orderRquest: boolean,
    orderSucces: boolean,
    orderError: boolean,
    orderNumber: number | null,
};
const initialState:TOrderState = {
    orderRquest: false,
    orderSucces: false,
    orderError: false,
    orderNumber: null,
};
export const orderReducer = ( state = initialState , action:TOrderAction ):TOrderState => {
    switch(action.type) {
        case GET_ORDER_REQUEST: {
          return {
              ...state,
              orderRquest: true,
              orderSucces: false,
              orderError: false
          }
        }
        case GET_ORDER_SUCCES: {
            return {
                ...state,
                orderRquest: false,
                orderSucces: true,
                orderNumber: action.payload
            }
        }
        case GET_ORDER_FAILED: {
            return {
                ...state,
                orderRquest: false,
                orderError: true,
            }
        }
        default: {
            return state;
        }
    }
}