import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILED,

    FORGOT_REQUEST,
    FORGOT_SUCCESS,
    FORGOT_FAILED,

    RESET_REQUEST,
    RESET_SUCCESS,
    RESET_FAILED,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,

    REFRESH_REQUEST,
    REFRESH_SUCCESS,
    REFRESH_FAILED, 

    USERDATA_REQUEST,
    USERDATA_SUCCESS,
    USERDATA_FAILED, 

    USERDATAUPDATE_REQUEST,
    USERDATAUPDATE_SUCCESS,
    USERDATAUPDATE_FAILED, 
    
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS
} from '../actions/user';

const initialState = {
    name: '',
    email: '',
    password: '',

    registerRequst: false,
    registerSuccess: false,
    regitsterFailed: false,

    forgotRequst: false,
    forgotSuccess: false,
    regitsterFailed: false,
    
    resetRequst: false,
    resetSuccess: false,
    resetFailed: false,
    
    logoutRequst: false,
    logoutSuccess: false,
    logoutFailed: false,

    refreshRequst: false,
    refreshSuccess: false,
    refreshFailed: false,

    userdataRequst: false,
    userdataSuccess: false,
    userdataFailed: false,

    userdataupdateRequst: false,
    userdataupdateSuccess: false,
    userdataupdateFailed: false,

    loginRequst: false,
    loginFailed: false,
    loginSuccess: false,
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_REQUEST: {
            return {
                ...state,
                registerRequst: true,
                regitsterFailed: false,
                registerSuccess: false,
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                registerRequst: false,
                regitsterFailed: false,
                registerSuccess: true,
            }
        }
        case REGISTER_FAILED: {
            return {
                ...state,
                registerRequst: false,
                regitsterFailed: true,
                registerSuccess: false,
            }
        }
        case FORGOT_REQUEST: {
            return {
                ...state,
                forgotRequst: true,
                forgotFailed: false,
                forgotSuccess: false,
            }
        }
        case FORGOT_SUCCESS: {
            return {
                ...state,
                forgotRequst: false,
                forgotFailed: false,
                forgotSuccess: true,
            }  
        }
        case FORGOT_FAILED: {
            return {
                ...state,
                forgotRequst: false,
                forgotFailed: true,
                forgotSuccess: false,
            }  
        }
        case RESET_REQUEST: {
            return {
                ...state,
                resetRequst: true,
                resetFailed: false,
                resetSuccess: false,
            }
        }
        case RESET_SUCCESS: {
            return {
                ...state,
                resetRequst: true,
                resetFailed: false,
                resetSuccess: true,
            }
        }
        case RESET_FAILED: {
            return {
                ...state,
                resetRequst: false,
                resetFailed: true,
                resetSuccess: false,
            }
        }
        case LOGOUT_REQUEST: {
            return {
                ...state,
                logoutRequst: true,
                logoutFailed: false,
                logoutSuccess: false,
            }
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                logoutRequst: false,
                logoutFailed: false,
                logoutSuccess: true,
            }
        }
        case LOGOUT_FAILED: {
            return {
                ...state,
                logoutRequst: false,
                logoutFailed: true,
                logoutSuccess: false,
            }
        }
        case REFRESH_REQUEST: {
            return {
                ...state,
                refreshRequst: true,
                refreshFailed: false,
                refreshSuccess: false,
            }
        }
        case REFRESH_SUCCESS: {
            return {
                ...state,
                refreshRequst: false,
                refreshFailed: false,
                refreshSuccess: true,
            }
        }
        case REFRESH_FAILED: {
            return {
                ...state,
                refreshRequst: false,
                refreshFailed: true,
                refreshSuccess: false,
            }
        }
        case USERDATA_REQUEST: {
            return {
                ...state,
                userdataRequst: true,
                userdataFailed: false,
                userdataSuccess: false,
            }
        }
        case USERDATA_SUCCESS: {
            return {
                ...state,
                userdataRequst: false,
                userdataFailed: false,
                userdataSuccess: true,
            }
        }
        case USERDATA_FAILED: {
            return {
                ...state,
                userdataRequst: false,
                userdataFailed: true,
                userdataSuccess: false,
            }
        }
        case USERDATAUPDATE_REQUEST: {
            return {
                ...state,
                userdataupdateRequst: true,
                userdataupdateFailed: false,
                userdataupdateSuccess: false,
            }
        }
        case USERDATAUPDATE_SUCCESS: {
            return {
                ...state,
                userdataupdateRequst: false,
                userdataupdateFailed: false,
                userdataupdateSuccess: true,
            }
        }
        case USERDATAUPDATE_FAILED: {
            return {
                ...state,
                userdataupdateRequst: false,
                userdataupdateFailed: true,
                userdataupdateSuccess: false,
            }
        }

        case LOGIN_REQUEST: {
            return {
                ...state,
                loginRequst: true,
                loginFailed: false,
                loginSuccess: false,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginRequst: false,
                loginFailed: false,
                loginSuccess: true,
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                loginRequst: false,
                loginFailed: true,
                loginSuccess: false,
            }
        }
        default: {
            return state;
        }
    }
}