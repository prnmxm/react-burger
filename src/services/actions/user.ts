import { AppDispatch, AppThunk } from '../../types';
import {setCookie, getCookie, deleteCookie} from '../../utils/fn'
import { push } from 'connected-react-router';
export const REGISTER_REQUEST: 'REGISTER_REQUEST' = "REGISTER_REQUEST"
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = "REGISTER_SUCCESS"
export const REGISTER_FAILED: 'REGISTER_FAILED' = "REGISTER_FAILED"

export const FORGOT_REQUEST: 'FORGOT_REQUEST' = "FORGOT_REQUEST"
export const FORGOT_SUCCESS: 'FORGOT_SUCCESS' = "FORGOT_SUCCESS"
export const FORGOT_FAILED: 'FORGOT_FAILED' = "FORGOT_FAILED"

export const RESET_REQUEST: 'RESET_REQUEST' = "RESET_REQUEST"
export const RESET_SUCCESS: 'RESET_SUCCESS' = "RESET_SUCCESS"
export const RESET_FAILED: 'RESET_FAILED' = "RESET_FAILED"

export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS:'LOGOUT_SUCCESS' = "LOGOUT_SUCCESS"
export const LOGOUT_FAILED:'LOGOUT_FAILED' = "LOGOUT_FAILED"

export const REFRESH_REQUEST:'REFRESH_REQUEST' = "REFRESH_REQUEST"
export const REFRESH_SUCCESS: 'REFRESH_SUCCESS' = "REFRESH_SUCCESS"
export const REFRESH_FAILED: 'REFRESH_FAILED' = "REFRESH_FAILED"

export const USERDATA_REQUEST: 'USERDATA_REQUEST' = "USERDATA_REQUEST"
export const USERDATA_SUCCESS: 'USERDATA_SUCCESS' = "USERDATA_SUCCESS"
export const USERDATA_FAILED: 'USERDATA_FAILED' = "USERDATA_FAILED"

export const USERDATAUPDATE_REQUEST: 'USERDATAUPDATE_REQUEST' = "USERDATAUPDATE_REQUEST"
export const USERDATAUPDATE_SUCCESS: 'USERDATAUPDATE_SUCCESS' = "USERDATAUPDATE_SUCCESS"
export const USERDATAUPDATE_FAILED: 'USERDATAUPDATE_FAILED' = "USERDATAUPDATE_FAILED"

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = "LOGIN_REQUEST"
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = "LOGIN_SUCCESS"
export const LOGIN_FAILED: 'LOGIN_FAILED' = "LOGIN_FAILED"
export interface IREGISTER_REQUEST {
    readonly type: typeof REGISTER_REQUEST;
}
export interface IREGISTER_SUCCESS {
    readonly type: typeof REGISTER_SUCCESS;
    readonly payload: {
        name: string,
        email: string,
    }
}
export interface IREGISTER_FAILED {
    readonly type: typeof REGISTER_FAILED;
}
export interface IFORGOT_REQUEST {
    readonly type: typeof FORGOT_REQUEST;
}
export interface IFORGOT_SUCCESS {
    readonly type: typeof FORGOT_SUCCESS;
    readonly payload: {
        email: string;
    }
}
export interface IFORGOT_FAILED {
    readonly type: typeof FORGOT_FAILED;
}
export interface IRESET_REQUEST {
    readonly type: typeof RESET_REQUEST;
}
export interface IRESET_SUCCESS {
    readonly type: typeof RESET_SUCCESS;
}
export interface IRESET_FAILED {
    readonly type: typeof RESET_FAILED;
}
export interface ILOGOUT_REQUEST {
    readonly type: typeof LOGOUT_REQUEST;
}
export interface ILOGOUT_SUCCESS {
    readonly type: typeof LOGOUT_SUCCESS;
}
export interface ILOGOUT_FAILED {
    readonly type: typeof LOGOUT_FAILED;
}
export interface IREFRESH_REQUEST {
    readonly type: typeof REFRESH_REQUEST;
}
export interface IREFRESH_SUCCESS {
    readonly type: typeof REFRESH_SUCCESS;
}
export interface IREFRESH_FAILED {
    readonly type: typeof REFRESH_FAILED;
}
export interface IUSERDATA_REQUEST {
    readonly type: typeof USERDATA_REQUEST;
}
export interface IUSERDATA_SUCCESS {
    readonly type: typeof USERDATA_SUCCESS;
    readonly payload: {
        name: string,
        email: string
    }
}
export interface IUSERDATA_FAILED {
    readonly type: typeof USERDATA_FAILED;
}
export interface IUSERDATAUPDATE_REQUEST {
    readonly type: typeof USERDATAUPDATE_REQUEST;
}
export interface IUSERDATAUPDATE_SUCCESS {
    readonly type: typeof USERDATAUPDATE_SUCCESS;
    readonly payload: {
        name: string,
        email: string,
    }
}
export interface IUSERDATAUPDATE_FAILED {
    readonly type: typeof USERDATAUPDATE_FAILED;
}
export interface ILOGIN_REQUEST {
    readonly type: typeof LOGIN_REQUEST;
}
export interface ILOGIN_SUCCESS {
    readonly type: typeof LOGIN_SUCCESS;
    readonly payload: {
        name: string,
        email: string,
    }
}
export interface ILOGIN_FAILED {
    readonly type: typeof LOGIN_FAILED;
}
export type TUserActions =
  | IREGISTER_REQUEST
  | IREGISTER_SUCCESS
  | IREGISTER_FAILED
  | IFORGOT_REQUEST
  | IFORGOT_SUCCESS
  | IFORGOT_FAILED
  | IRESET_REQUEST
  | IRESET_SUCCESS
  | IRESET_FAILED
  | ILOGOUT_REQUEST
  | ILOGOUT_SUCCESS
  | ILOGOUT_FAILED
  | IREFRESH_REQUEST
  | IREFRESH_SUCCESS
  | IREFRESH_FAILED
  | IUSERDATA_REQUEST
  | IUSERDATA_SUCCESS
  | IUSERDATA_FAILED
  | IUSERDATAUPDATE_REQUEST
  | IUSERDATAUPDATE_SUCCESS
  | IUSERDATAUPDATE_FAILED
  | ILOGIN_REQUEST
  | ILOGIN_SUCCESS
  | ILOGIN_FAILED;
export const registerUser:AppThunk = (value) => (dispatch:AppDispatch) => {
    dispatch({
        type: REGISTER_REQUEST,
    });
    fetch('https://norma.nomoreparties.space/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(value)
    }).then( e => {
        if(e.ok) {
            return e.json();
          }
        return Promise.reject(e)
    }).then( e => {
            const accessToken = e.accessToken.split('Bearer ')[1];
            const refreshToken = e.refreshToken;
            setCookie('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: e.user,
            });
            dispatch(push('/'));
            
    }).catch( e => {
        dispatch({
            type: REGISTER_FAILED,
        });
    })
}

export const forgotPassword:AppThunk = (value) => (dispatch:AppDispatch) => {
    dispatch({
        type: FORGOT_REQUEST,
    });
    fetch('https://norma.nomoreparties.space/api/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(value)
    }).then( e => {
        if(e.ok) {
            return e.json();
          }
        return Promise.reject(e)
    }).then( e => {
        dispatch({
            type: FORGOT_SUCCESS,
            payload: value
        });
        dispatch(push('/reset-password'));
    }).catch( e => {
        dispatch({
            type: FORGOT_FAILED,
        });
    })
}

export const resetPassword:AppThunk = (value) => (dispatch:AppDispatch) => {
    dispatch({
        type: RESET_REQUEST,
    });
    fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(value)
    }).then( e => {
        if(e.ok) {
            return e.json();
        }
        return Promise.reject(e)
    }).then( e => {
        dispatch({
            type: RESET_SUCCESS,
        });
        dispatch(push('/login'));
    }).catch( e => {
        dispatch({
            type: RESET_FAILED,
        });
    })
}

export const logoutUser:AppThunk = (value) => (dispatch:AppDispatch) => {
    dispatch({
        type: LOGOUT_REQUEST,
    });
    fetch('https://norma.nomoreparties.space/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
    }).then( e => {
        if(e.ok) {
            return e.json();
        }
        return Promise.reject(e)
    }).then( e => {
        deleteCookie('token');
        localStorage.removeItem('refreshToken');
        dispatch({
            type: LOGOUT_SUCCESS,
        });
        dispatch(push('/login'));
    }).catch( e => {
        dispatch({
            type: LOGOUT_FAILED,
        });
    })
}
export const loginUser:AppThunk = ({value, path}:{value: any, path: string}) => (dispatch:AppDispatch) => {
    dispatch({
        type: LOGOUT_REQUEST,
    });
    fetch('https://norma.nomoreparties.space/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(value)
    }).then( e => {
        if(e.ok) {
            return e.json();
        }
        return Promise.reject(e)
    }).then( e => {
        const accessToken = e.accessToken.split('Bearer ')[1];
        const refreshToken = e.refreshToken;
        setCookie('token', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: e.user,
        });
        dispatch(push(path));
    }).catch( e => {
        dispatch({
            type: LOGIN_FAILED,
        });
    })
}
export const refreshToken:AppThunk = (value) => (dispatch:AppDispatch) => {
    dispatch({
        type: REFRESH_REQUEST,
    });
    fetch('https://norma.nomoreparties.space/api/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
    }).then( e => {
        if(e.ok) {
            return e.json();
        }
        return Promise.reject(e)
    }).then( e => {
        const accessToken = e.accessToken.split('Bearer ')[1];
        const refreshToken = e.refreshToken;
        setCookie('token', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        dispatch({
            type: REFRESH_SUCCESS,
        });
    }).catch( e => {
        deleteCookie('token');
        localStorage.removeItem('refreshToken');
        dispatch(push('/login'))
        dispatch({
            type: REFRESH_FAILED,
        });
    })
}

export const userData:AppThunk = (value) => (dispatch:AppDispatch) => {
    dispatch({
        type: USERDATA_REQUEST,
    });
    fetch('https://norma.nomoreparties.space/api/auth/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + getCookie('token'),
        },
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
    
    }).then( e => {
        return e.ok ? e.json() : e.json().then((err) => Promise.reject(err));
    }).then( e => {
        dispatch({
            type: USERDATA_SUCCESS,
            payload: e.user,
        });
    }).catch( e => {
        dispatch({
            type: USERDATA_FAILED,
        });
        deleteCookie('token');
        localStorage.removeItem('refreshToken');
        dispatch(push('/login'));
    })
}

export const userDataUpdate:AppThunk = (value) => (dispatch:AppDispatch) => {
    dispatch({
        type: USERDATAUPDATE_REQUEST,
    });
    fetch('https://norma.nomoreparties.space/api/auth/user', {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + getCookie('token'),
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(value)
    }).then( e => {
        return e.ok ? e.json() : e.json().then((err) => Promise.reject(err));
    }).then( e => {
        dispatch({
            type: USERDATAUPDATE_SUCCESS,
            payload: e.user,
        });
    }).catch( e => {
        dispatch({
            type: USERDATAUPDATE_FAILED,
        });
        refreshToken()
    })
}