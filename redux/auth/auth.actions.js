import types from './auth.types';

export const logout = () => {
    return { type: types.LOG_OUT }
}


export const logInStarted = () => {
    return {
        type: types.LOG_IN_START,
    }
}

export const logInRequested = (payload) => {
    return {
        type: types.LOG_IN_REQUESTED,
        payload: payload
    }
}

export const logInSuccess = (user) => {
    return {
        type: types.LOG_IN_SUCCESS,
        payload: user
    }
}

export const logInFailure = (error) => {
    return {
        type: types.LOG_IN_FAILURE,
        payload: error
    }
}

export const storeUserEmail = (email) => {
    return {
        type: types.STORE_USER_EMAIL,
        payload: email
    }
}

export const registerRequested = (payload) => {
    return { type: types.REGISTER_REQUESTED, payload: payload }
}

export const registerStarted = () => {
    return {
        type: types.REGISTER_START,
    }
}

export const registerSuccess = () => {
    return {
        type: types.REGISTER_SUCCESS
    }
}

export const registerFailure = (error) => {
    return {
        type: types.REGISTER_FAILURE,
        payload: error
    }
}