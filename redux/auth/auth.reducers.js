import types from './auth.types';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initState = {
    loading: false,
    error: null,
    user: null,
    storedEmail: null,
    isAuthenticated: false
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case types.LOG_IN_START:
            return {...state, loading: true}
        case types.LOG_IN_FAILURE:
            return {...state, loading: false, error: action.payload}
        case types.LOG_IN_SUCCESS:
            return {
                loading: false,
                error: null,
                user: action.payload,
                isAuthenticated: true
            }
        case types.STORE_USER_EMAIL:
            return {...state, storedEmail: action.payload}
        case types.LOG_OUT:
            return {...state, user: null, isAuthenticated: false}
        default:
            return state;
    }
}


const registerUserReducer = (state = {loading: false, error: null}, action) => {
    switch(action.type) {
        case types.REGISTER_START:
            return { loading: true, error: null, ok: false }
        case types.REGISTER_FAILURE:
            return { loading: false, error: action.payload, ok: false }
        case types.REGISTER_SUCCESS:
            return { loading: false, error: null, ok: true}
        default:
            return state;
    }
}



const authPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['loading', 'error']
  }


const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export {
    authPersistReducer,
    registerUserReducer
}