import { GET_INGREDIENTS_REQUEST, 
    GET_INGREDIENTS_SUCCESS, 
    GET_INGREDIENTS_ERROR, 
    INGREDIENTS_ADD, 
    INGREDIENTS_REMOVE,
    INGREDIENTS_SELECTED_CLEAR,
    INGREDIENTS_SELECTED_UPDATE } from '../actions/ingredients';
import { TIngredientsActions } from '../actions/ingredients';
import { TIngredient } from '../../types'

type TIngredientsState = {
    items: Array<TIngredient>,
    itemsRequest: boolean,
    itemsLoaded: boolean,
    itemsError: boolean,
    selected: Array<TIngredient>,
    isDisabledOrder: boolean,
    selectedBun: any,
};
const initialState: TIngredientsState = {
    items: [],
    itemsRequest: false,
    itemsLoaded: false,
    itemsError: false,

    selected: [],
    isDisabledOrder: true,
    selectedBun: {},
};
export const ingredientsReducer = ( state = initialState , action: TIngredientsActions ): TIngredientsState => {
    switch(action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                itemsRequest: true,
            }
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                items: action.payload,
                itemsLoaded: true,
                itemsRequest: false,
                itemsError: false,
            }
        }
        case GET_INGREDIENTS_ERROR: {
            return {
                ...state,
                itemsRequest: false,
                itemsLoaded: false,
                itemsError: true,
            }
        }
        case INGREDIENTS_ADD: {
            const newState = {...state, items: state.items.map( e => {
                if (e._id === action.payload._id && e.count !== null && e.count !== undefined) {
                    return {
                        ...e,
                        count: e.count + 1
                    }
                }
                return e;
            }), selected: [...state.selected ]}
            if (action.payload.type === 'bun') {
                newState.isDisabledOrder = false;
                newState.selected = newState.selected.filter( e => {
                    if(e.type === 'bun') {
                        return false;
                    }
                    return true
                })
                newState.items = newState.items.map(e => {
                    if (e.type === 'bun' && e._id !== action.payload._id) {
                        return {
                            ...e,
                            count: 0
                        }
                    } else if (e.type === 'bun' && e._id === action.payload._id) {
                        return {
                            ...e,
                            count: 2
                        }
                    }
                    return e
                })
            }
            newState.selected = [...newState.selected, action.payload]
            if (action.payload.type === 'bun') {
                newState.selected = [...newState.selected, action.payload]
            }
            return newState
        }
        case INGREDIENTS_REMOVE: {
            const newState = {...state,items: state.items.map( e => {
                if (e._id === action.payload._id && e.count) {
                    return {
                        ...e,
                        count: e.count - 1
                    }
                }
                return e;
            }), selected: [...state.selected.filter(e => e.customId !== action.payload.customId) ]}
            return newState
        }
        case INGREDIENTS_SELECTED_CLEAR: {
            return {
                ...state,
                selected: [],
                items: state.items.map( e => {
                    return {...e, count: 0}
                })
            }
        }
        case INGREDIENTS_SELECTED_UPDATE: {
            const newState = [...state.selected];
            newState.splice(action.payload.to, 0, newState.splice(action.payload.from, 1)[0]);
      
            return {
              ...state,
              selected: newState
            }
        }
        default: {
            return state;
        }
    }
}