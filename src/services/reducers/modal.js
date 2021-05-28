import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal';

const initialState = {
    isOpen: false,
    content: null,
    title: ''
};
export const modalReducer = ( state = initialState , action ) => {
    switch(action.type) {
        case OPEN_MODAL: {
            return {
                isOpen: true,
                title: action.payload.title || '',
                content: action.payload.content,
            }
        }
        case CLOSE_MODAL: {
            return {
                isOpen: false,
                content: null,
            }
        }
        default: {
            return state;
        }
    }
}