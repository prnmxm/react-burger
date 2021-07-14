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

export interface IWS_CONNECTION_START {
	readonly type: typeof WS_CONNECTION_START;
}
export interface IWS_CONNECTION_SUCCESS {
	readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IWS_CONNECTION_ERROR {
	readonly type: typeof WS_CONNECTION_ERROR;
	readonly payload: any;
}
export interface IWS_CONNECTION_CLOSED {
	readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IWS_GET_MESSAGE {
	readonly type: typeof WS_GET_MESSAGE;
	readonly payload: any;
}
export interface IWS_SEND_MESSAGE {
	readonly type: typeof WS_SEND_MESSAGE;
}
export type TWsActions =
  | IWS_CONNECTION_START
  | IWS_CONNECTION_SUCCESS
  | IWS_CONNECTION_ERROR
  | IWS_CONNECTION_CLOSED
  | IWS_GET_MESSAGE
  | IWS_SEND_MESSAGE;