import types from './types';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initAuthState = {
    token: null,
    expiry: null,
    storedUser: null,
    requestStatus: {
        active: false,
        error: null,
        success: null
    },
}

const authReducer = (state = initAuthState, action) => {
    switch(action.type) {
        case types.LOG_IN_START:
            return {
                ...state,
                requestStatus: {
                    ...state.requestStatus,
                    active: true,
                }
            }
        case types.LOG_IN_SUCCESS:
            return {
                token: action.payload.token,
                expiry: action.payload.expiry,
                requestStatus: {
                    active: false,
                    success: true,
                    error: null,
                },
            }
        case types.LOG_IN_FAILURE:
            return {
                ...state,
                token: null,
                expiry: null,
                requestStatus: {
                    active: false,
                    success: false,
                    error: action.payload
                }
            }
        case types.STORE_USER_EMAIL:
            return {
                ...state,
                storedUser: action.payload,
            }
        default:
            return state;
    }
}


const authPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['requestStatus']
  }


export default persistReducer(authPersistConfig, authReducer);