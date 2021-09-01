import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal';
import {TModalAction} from '../actions/modal'
import React from 'react'
type TModalState = {
    isOpen: boolean,
    content:  React.ReactNode |null,
    title: string
};
export const initialState:TModalState = {
    isOpen: false,
    content: null,
    title: ''
};
export const modalReducer = ( state = initialState , action:TModalAction ):TModalState => {
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
                ...state,
                isOpen: false,
                content: null,
            }
        }
        default: {
            return state;
        }
    }
}