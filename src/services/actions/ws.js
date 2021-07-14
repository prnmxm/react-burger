export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';


export const wsActions = {
	wsInit: WS_CONNECTION_START,
	onOpen: WS_CONNECTION_SUCCESS,
	onError: WS_CONNECTION_ERROR,
	onClose: WS_CONNECTION_CLOSED,
	onMessage: WS_GET_MESSAGE,
	wsSendMessage: WS_SEND_MESSAGE,
};
