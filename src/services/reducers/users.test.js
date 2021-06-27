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
import {userReducer, initialState} from './user.js'

describe('users reducer', () => {
    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual(
          {
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
        )
    })
    it('should handle REGISTER_REQUEST', () => {
      expect(
        userReducer(undefined, {
            type: REGISTER_REQUEST,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            registerRequst: true,
            regitsterFailed: false,
            registerSuccess: false,
          }
        )
      )
    })
    it('should handle REGISTER_SUCCESS', () => {
      expect(
        userReducer(undefined, {
            type: REGISTER_SUCCESS,
            payload: {
              name: 'action.payload.name',
              email: 'action.payload.email',
            }
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            name: 'action.payload.name',
            email: 'action.payload.email',
            registerRequst: false,
            regitsterFailed: false,
            registerSuccess: true,
          }
        )
      )
    })
    it('should handle REGISTER_FAILED', () => {
      expect(
        userReducer(undefined, {
            type: REGISTER_FAILED,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            registerRequst: false,
            regitsterFailed: true,
            registerSuccess: false,
          }
        )
      )
    })
    it('should handle FORGOT_REQUEST', () => {
      expect(
        userReducer(undefined, {
            type: FORGOT_REQUEST,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            forgotRequst: true,
            forgotFailed: false,
            forgotSuccess: false,
          }
        )
      )
    })
    it('should handle FORGOT_SUCCESS', () => {
      expect(
        userReducer(undefined, {
            type: FORGOT_SUCCESS,
            payload: {
              email: 'mail@mail.ru'
            }
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            email:  'mail@mail.ru',
            forgotRequst: false,
            forgotFailed: false,
            forgotSuccess: true,
          }
        )
      )
    })
    it('should handle FORGOT_FAILED', () => {
      expect(
        userReducer(undefined, {
            type: FORGOT_FAILED,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            forgotRequst: false,
            forgotFailed: true,
            forgotSuccess: false,
          }
        )
      )
    })
    it('should handle RESET_REQUEST', () => {
      expect(
        userReducer(undefined, {
            type: RESET_REQUEST,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            resetRequst: true,
            resetFailed: false,
            resetSuccess: false,
          }
        )
      )
    })
    it('should handle RESET_SUCCESS', () => {
      expect(
        userReducer(undefined, {
            type: RESET_SUCCESS,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            resetRequst: true,
            resetFailed: false,
            resetSuccess: true,
          }
        )
      )
    })
    it('should handle RESET_FAILED', () => {
      expect(
        userReducer(undefined, {
            type: RESET_FAILED,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            resetRequst: false,
            resetFailed: true,
            resetSuccess: false,
          }
        )
      )
    })
    it('should handle LOGOUT_REQUEST', () => {
      expect(
        userReducer(undefined, {
            type: LOGOUT_REQUEST,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            logoutRequst: true,
            logoutFailed: false,
            logoutSuccess: false,
          }
        )
      )
    })
    it('should handle LOGOUT_SUCCESS', () => {
      expect(
        userReducer(undefined, {
            type: LOGOUT_SUCCESS,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            logoutRequst: false,
            logoutFailed: false,
            logoutSuccess: true,
          }
        )
      )
    })
    it('should handle LOGOUT_FAILED', () => {
      expect(
        userReducer(undefined, {
            type: LOGOUT_FAILED,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            logoutRequst: false,
            logoutFailed: true,
            logoutSuccess: false,
          }
        )
      )
    })
    it('should handle REFRESH_REQUEST', () => {
      expect(
        userReducer(undefined, {
            type: REFRESH_REQUEST,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            refreshRequst: true,
            refreshFailed: false,
            refreshSuccess: false,
          }
        )
      )
    })
    it('should handle REFRESH_SUCCESS', () => {
      expect(
        userReducer(undefined, {
            type: REFRESH_SUCCESS,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            refreshRequst: false,
            refreshFailed: false,
            refreshSuccess: true,
          }
        )
      )
    })
    it('should handle REFRESH_FAILED', () => {
      expect(
        userReducer(undefined, {
            type: REFRESH_FAILED,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            refreshRequst: false,
            refreshFailed: true,
            refreshSuccess: false,
          }
        )
      )
    })
    it('should handle USERDATA_REQUEST', () => {
      expect(
        userReducer(undefined, {
            type: USERDATA_REQUEST,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            userdataRequst: true,
            userdataFailed: false,
            userdataSuccess: false,
          }
        )
      )
    })
    it('should handle USERDATA_SUCCESS', () => {
      expect(
        userReducer(undefined, {
            type: USERDATA_SUCCESS,
            payload: {
              name: 'action.payload.name',
              email: 'action.payload.email',
            }
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            name: 'action.payload.name',
            email: 'action.payload.email',
            userdataRequst: false,
            userdataFailed: false,
            userdataSuccess: true,
          }
        )
      )
    })
    it('should handle USERDATA_FAILED', () => {
      expect(
        userReducer(undefined, {
            type: USERDATA_FAILED,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            userdataRequst: false,
            userdataFailed: true,
            userdataSuccess: false,
          }
        )
      )
    })
    it('should handle USERDATAUPDATE_REQUEST', () => {
      expect(
        userReducer(undefined, {
            type: USERDATAUPDATE_REQUEST,
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            userdataupdateRequst: true,
            userdataupdateFailed: false,
            userdataupdateSuccess: false,
          }
        )
      )
    })
    it('should handle USERDATAUPDATE_SUCCESS', () => {
      expect(
        userReducer(undefined, {
            type: USERDATAUPDATE_SUCCESS,   
            payload: {
              name: 'action.payload.name',
              email: 'action.payload.email',
            }
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            name: 'action.payload.name',
            email: 'action.payload.email',
            userdataupdateRequst: false,
            userdataupdateFailed: false,
            userdataupdateSuccess: true,
          }
        )
      )
    })
    it('should handle USERDATAUPDATE_FAILED', () => {
      expect(
        userReducer(undefined, {
            type: USERDATAUPDATE_FAILED,   
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            userdataupdateRequst: false,
            userdataupdateFailed: true,
            userdataupdateSuccess: false,
          }
        )
      )
    })
    it('should handle LOGIN_REQUEST', () => {
      expect(
        userReducer(undefined, {
            type: LOGIN_REQUEST,   
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            loginRequst: true,
            loginFailed: false,
            loginSuccess: false,
          }
        )
      )
    })
    it('should handle LOGIN_SUCCESS', () => {
      expect(
        userReducer(undefined, {
            type: LOGIN_SUCCESS,   
            payload: {
              name: 'action.payload.name',
              email: 'action.payload.email',
            }
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            name: 'action.payload.name',
            email: 'action.payload.email',
            loginRequst: false,
            loginFailed: false,
            loginSuccess: true,
          }
        )
      )
    })
    it('should handle LOGIN_FAILED', () => {
      expect(
        userReducer(undefined, {
            type: LOGIN_FAILED,   
          })
        ).toEqual(expect.objectContaining(
          {
            ...initialState,
            loginRequst: false,
            loginFailed: true,
            loginSuccess: false,
          }
        )
      )
    })
})