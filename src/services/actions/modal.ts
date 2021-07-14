import React from 'react'
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';
export const OPEN_MODAL:'OPEN_MODAL' = 'OPEN_MODAL';

export interface IOPENMODAL {
    readonly type: typeof OPEN_MODAL;
    readonly payload: {
        content?:  React.ReactNode | null,
        title?: string
    }
}

export interface ICLOSEMODAL {
    readonly type: typeof CLOSE_MODAL;
}

export type TModalAction =
  | ICLOSEMODAL
  | IOPENMODAL;