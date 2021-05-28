import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_ERROR, INGREDIENTS_ADD, INGREDIENTS_REMOVE } from '../actions/ingredients';
const initialState = {
    items: [],
    itemsRequest: false,
    itemsLoaded: false,
    itemsError: false,

    selectedItems: [],
    isDisabledOrder: true,
    isSelectedBun: false,
    selectedBun: {},
    orderRequest: false,
    orderdLoaded: false,
    orderError: false,
};
export const ingredientsReducer = ( state = initialState , action ) => {
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
                if (e._id === action.payload._id) {
                    return {
                        ...e,
                        count: e.count + 1
                    }
                }
                return e;
            }), selectedItems: [...state.selectedItems ]}
            if (action.payload.type === 'bun') {
                newState.isSelectedBun = true;
                newState.isDisabledOrder = false;
                newState.selectedBun = action.payload;
                newState.selectedItems = newState.selectedItems.filter( e => {
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
            newState.selectedItems = [...newState.selectedItems, action.payload]
            return newState
        }
        case INGREDIENTS_REMOVE: {
            const newState = {...state,items: state.items.map( e => {
                if (e._id === action.payload._id) {
                    return {
                        ...e,
                        count: e.count - 1
                    }
                }
                return e;
            }), selectedItems: [...state.selectedItems.filter(e => e.customId !== action.payload.customId) ]}
            return newState
        }
        default: {
            return state;
        }
    }
}