import {
	WS_CONNECTION_SUCCESS,
	WS_CONNECTION_ERROR,
	WS_CONNECTION_CLOSED,
	WS_GET_MESSAGE,
	TWsActions
} from '../actions/ws';
type TInitialState = {
	wsConnected: boolean,
	error: null | boolean,
	messages: Array<any>
};
const initialState = {
	wsConnected: false,
	error: null,
	messages: []
};

export const wsReducer = (state = initialState, action:TWsActions):TInitialState => {
	switch (action.type) {
		case WS_CONNECTION_SUCCESS:
			return {
				...state,
				wsConnected: true
			};

		case WS_CONNECTION_ERROR:
			return {
				...state,
				error: action.payload,
				wsConnected: false
			};

		case WS_CONNECTION_CLOSED:
			return {
				...state,
				wsConnected: false
			};

		case WS_GET_MESSAGE:
			return {
				...state,
				messages: action.payload
			};

		default:
			return state;
	}
};
