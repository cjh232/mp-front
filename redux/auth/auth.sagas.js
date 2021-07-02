import { takeLatest, call, put } from 'redux-saga/effects';
import {
    logInSuccess,
    logInFailure,
    storeUserEmail,
    logInStarted,
    registerStarted,
    registerSuccess,
    registerFailure
} from './auth.actions'
import { loginApi, registerApi } from './auth.api'


function* loginEffectSaga(action) {

    yield put(logInStarted())

    const {email, password, rememberUser, router} = action.payload;

    try {
        

        let { data } = yield call(loginApi, {email, password});

        let user = {
            token: data.access_token,
            expiry: '2',
            first_name: data.first_name,
            last_name: data.last_name
        }


        yield put(logInSuccess(user))
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
        
    } finally {
        if (rememberUser) {
            yield put(storeUserEmail(email))
        }
    }
}

function* registerEffectSaga(action) {

    yield put(registerStarted())
    try {
        const registerData = action.payload;

        let response = yield call(registerApi, registerData);

        yield put(registerSuccess())

        console.log(response)
    } catch (error) {
        let errorResponse;

        if (error.response && error.response.data) {
            errorResponse = error.response.data
            yield put(registerFailure(errorResponse))
        } else if(error.request) {
            errorResponse = {
                detail: "Failed to connect to backend server."
            }
            yield put(registerFailure(errorResponse))
        }
    }
}

export function* loginWatcherSaga() {
    yield takeLatest('LOG_IN_REQUESTED', loginEffectSaga)
}

export function* registerWatcherSaga() {
    yield takeLatest('REGISTER_REQUESTED', registerEffectSaga)
}