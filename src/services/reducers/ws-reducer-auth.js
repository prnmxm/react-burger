import {
	WS_CONNECTION_AUTH_START,
	WS_CONNECTION_AUTH_SUCCESS,
	WS_CONNECTION_AUTH_ERROR,
	WS_CONNECTION_AUTH_CLOSED,
	WS_GET_MESSAGE_AUTH,
	WS_SEND_MESSAGE_AUTH,
} from '../actions/ws-auth';

const initialState = {
	wsConnected: false,
	error: null,
	messages: []
};

export const wsReducerAuth = (state = initialState, action) => {
	switch (action.type) {
		case WS_CONNECTION_AUTH_SUCCESS:
			return {
				...state,
				wsConnected: true
			};

		case WS_CONNECTION_AUTH_ERROR:
			return {
				...state,
				error: action.payload,
				wsConnected: false
			};

		case WS_CONNECTION_AUTH_CLOSED:
			return {
				...state,
				wsConnected: false
			};

		case WS_GET_MESSAGE_AUTH:
			return {
				...state,
				messages: action.payload
			};

		default:
			return state;
	}
};
