import types from './types';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initAuthState = {
    token: null,
    expiry: null,
    storedUser: null,
    error: null,

}

const authReducer = (state = initAuthState, action) => {
    switch(action.type) {
        case types.LOG_IN_SUCCESS:
            return {
                token: action.payload.token,
                expiry: action.payload.expiry,
                error: null,
            }
        case types.LOG_IN_FAILURE:
            return {
                ...state,
                token: null,
                expiry: null,
                error: action.payload
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
    blacklist: ['error']
  }


export default persistReducer(authPersistConfig, authReducer);