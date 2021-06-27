import { takeLatest, call, put } from 'redux-saga/effects';
import {
    logInSuccess,
    logInFailure,
    storeUserEmail
} from './actions'
import { loginApi } from './api'


function* loginEffectSaga(action) {
    try {
        const {email, password, rememberUser, router} = action.payload;

        let { token } = yield call(loginApi, {email, password});

        let tokenPair = {
            token: token,
            expiry: '2'
        }

        yield put(logInSuccess(tokenPair))

        if (rememberUser) {
            yield put(storeUserEmail(email))
        }

        router.push('/');

    } catch (error) {
        let errorResponse;

        if (error.response && error.response.data) {
            errorResponse = error.response.data
            yield put(logInFailure(errorResponse))
        } else if(error.request) {
            errorResponse = {
                detail: "Failed to connect to backend server."
            }
            yield put(logInFailure(errorResponse))
        }
        
    }
}

export function* loginWatcherSaga() {
    yield takeLatest('LOG_IN_REQUESTED', loginEffectSaga)
}