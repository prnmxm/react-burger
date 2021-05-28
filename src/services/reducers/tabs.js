import { SET_ACTIVE_TAB, SET_ACTIVE_TAB_CLICK, SET_DISABLE,DEL_DISABLE } from '../actions/index';
const initialState = {
    tabs: ['Булочки','Начинки','Соусы'],
    active: 'Булочки',
    disable: false,
};
export const tabsReducer = ( state = initialState , action ) => {
    switch(action.type) {
        case SET_ACTIVE_TAB: {
            return {
                ...state,
                active: action.payload
            }
        }
        case SET_ACTIVE_TAB_CLICK: {
      document.querySelector(`[data-name=${action.payload}]`).scrollIntoView({block: "start", behavior: "smooth"});
            return {
                ...state,
                active: action.payload,
            }
        }
        case SET_DISABLE: {
            return {
                ...state,
                disable: true,
            }
        }
        case DEL_DISABLE: {
            return {
                ...state,
                disable: false,
            }
        }
        default: {
            return state;
        }
    }
}