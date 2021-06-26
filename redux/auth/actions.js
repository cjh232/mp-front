import types from './types';

export const logInRequested = (payload) => {
    return {
        type: types.LOG_IN_REQUESTED,
        payload: payload
    }
}

export const logInSuccess = (tokenPair) => {
    return {
        type: types.LOG_IN_SUCCESS,
        payload: tokenPair
    }
}

export const logInFailure = (error) => {
    return {
        type: types.LOG_IN_FAILURE,
        payload: error
    }
}