import { SET_ACTIVE_TAB_SCROLL, SET_ACTIVE_TAB_CLICK, ADD_ITEMS_TITLE, ADD_ITEMS_REF, TTabsActions } from '../actions/tabs';
type TTabsState = {
    tabs: Array<any>,
    active: string,
    refs: Array<any>,
};
const initialState:TTabsState = {
    tabs: [],
    active: '',
    refs: [],
};
export const tabsReducer = ( state = initialState , action:TTabsActions ):TTabsState => {
    switch(action.type) {
        case SET_ACTIVE_TAB_SCROLL: {
            return {
                ...state,
                active: action.payload
            }
        }
        case SET_ACTIVE_TAB_CLICK: {
            const item = state.refs.find( e => e.name === action.payload);
            item.ref.scrollIntoView({block: "start", behavior: 'smooth'});
            return {
                ...state,
                active: action.payload,
            }
        }
        case ADD_ITEMS_TITLE: {
            return {
                ...state,
                tabs: action.payload,
                active: action.payload[0]
            }
        }
        case ADD_ITEMS_REF: {
            const newState = {...state}
            newState.refs.push({
                ref: action.payload.ref,
                name: action.payload.name
            });
            return newState;
        }
        default: {
            return state;
        }
    }
}