import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCES} from '../actions/order'
import {orderReducer, initialState} from './order.ts'

describe('order reducer', () => {
    it('should return the initial state', () => {
        expect(orderReducer(undefined, {})).toEqual(
          {
            orderRquest: false,
            orderSucces: false,
            orderError: false,
            orderNumber: null,
          }
        )
    })
    it('should handle GET_ORDER_REQUEST', () => {
      expect(
        orderReducer(undefined, {
            type: GET_ORDER_REQUEST,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            orderRquest: true,
            orderSucces: false,
            orderError: false
          }
        )
      )
    })
    it('should handle GET_ORDER_SUCCES', () => {
      expect(
        orderReducer(undefined, {
            type: GET_ORDER_SUCCES,
            payload: 123
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            orderRquest: false,
            orderSucces: true,
            orderNumber: 123
          }
        )
      )
    })
    it('should handle GET_ORDER_FAILED', () => {
      expect(
        orderReducer(undefined, {
            type: GET_ORDER_FAILED,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            orderRquest: false,
            orderError: true,
          }
        )
      )
    })
})