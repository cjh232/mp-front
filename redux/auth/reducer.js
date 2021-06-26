import types from './types';

const initAuthState = {
    token: null,
    expiry: null,
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
                token: null,
                expiry: null,
                error: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;