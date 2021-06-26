import { GET_INGREDIENTS_REQUEST, 
    GET_INGREDIENTS_SUCCESS, 
    GET_INGREDIENTS_ERROR, 
    INGREDIENTS_ADD, 
    INGREDIENTS_REMOVE,
    INGREDIENTS_SELECTED_CLEAR,
    INGREDIENTS_SELECTED_UPDATE } from '../actions/ingredients';
import {ingredientsReducer, initialState} from './ingredients'

describe('ingredients reducer', () => {
    it('should return the initial state', () => {
        expect(ingredientsReducer(undefined, {})).toEqual(
          {
            items: [],
            itemsRequest: false,
            itemsLoaded: false,
            itemsError: false,
        
            selected: [],
            isDisabledOrder: true,
            selectedBun: {},
          }
        )
    })
    it('should handle GET_INGREDIENTS_REQUEST', () => {
      expect(
        ingredientsReducer(undefined, {
            type: GET_INGREDIENTS_REQUEST,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            itemsRequest: true,
          }
        )
      )
    })
    it('should handle GET_INGREDIENTS_SUCCESS', () => {
      expect(
        ingredientsReducer(undefined, {
            type: GET_INGREDIENTS_SUCCESS,
            payload: [1,2,3]
 
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            itemsLoaded: true,
            itemsRequest: false,
            itemsError: false,
            items: [1,2,3]
          }
        )
      )
    })
    it('should handle GET_INGREDIENTS_ERROR', () => {
      expect(
        ingredientsReducer(undefined, {
            type: GET_INGREDIENTS_ERROR,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            itemsRequest: false,
            itemsLoaded: false,
            itemsError: true,
          }
        )
      )
    })
    it('should handle INGREDIENTS_ADD', () => {
      expect(
        ingredientsReducer({
          ...initialState,
          items: [{
            _id: 1,
            type: 'main',
            count: 0
          }],
          selected: []
        }, {
            type: INGREDIENTS_ADD,
            payload: {
              _id: 1,
              type: 'main'
            }
 
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            selected: [{
              _id: 1,
              type: 'main'
            }],
            items: [{
              _id: 1,
              type: 'main',
              count: 1
            }]
          }
        )
      )
    })
    it('should handle INGREDIENTS_REMOVE', () => {
      expect(
        ingredientsReducer({
          ...initialState,
          items: [{
            _id: 1,
            type: 'main',
            count: 1
          }],
          selected: [{
            _id: 1,
            type: 'main',
          }]
        }, {
            type: INGREDIENTS_REMOVE,
            payload: {
              _id: 1,
              type: 'main'
            }
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            selected: [],
            items: [{
              _id: 1,
              type: 'main',
              count: 0
            }]
          }
        )
      )
    })
    it('should handle INGREDIENTS_SELECTED_CLEAR', () => {
      expect(
        ingredientsReducer({
          ...initialState,
          items: [{
            _id: 1,
            type: 'main',
            count: 1
          }],
          selected: [{
            _id: 1,
            type: 'main',
          }]
        }, {
            type: INGREDIENTS_SELECTED_CLEAR,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            selected: [],
            items: [{
              _id: 1,
              type: 'main',
              count: 0
            }]
          }
        )
      )
    })
})