import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_ERROR } from '../actions/ingredients';
const initialState = {
    items: [],
    itemsRequest: false,
    itemsLoaded: false,
    itemsError: false,

    selectedItems: [],
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
            console.log(e);
            return {
                ...state,
                itemsRequest: false,
                itemsLoaded: false,
                itemsError: true,
            }
        }
        default: {
            return state;
        }
    }
}