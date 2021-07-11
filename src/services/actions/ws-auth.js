export const WS_CONNECTION_AUTH_START = 'WS_CONNECTION_AUTH_START';
export const WS_CONNECTION_AUTH_SUCCESS = 'WS_CONNECTION_AUTH_SUCCESS';
export const WS_CONNECTION_AUTH_ERROR = 'WS_CONNECTION_AUTH_ERROR';
export const WS_CONNECTION_AUTH_CLOSED = 'WS_CONNECTION_AUTH_CLOSED';
export const WS_GET_MESSAGE_AUTH = 'WS_GET_MESSAGE_AUTH';
export const WS_SEND_MESSAGE_AUTH = 'WS_SEND_MESSAGE_AUTH';

export const wsActionsAuth = {
	wsInit: WS_CONNECTION_AUTH_START,
	onOpen: WS_CONNECTION_AUTH_SUCCESS,
	onError: WS_CONNECTION_AUTH_ERROR,
	onClose: WS_CONNECTION_AUTH_CLOSED,
	onMessage: WS_GET_MESSAGE_AUTH,
	wsSendMessage: WS_SEND_MESSAGE_AUTH,
};