import {
    takeLatest,
    call,
    put
} from 'redux-saga/effects';

import {
    logInSuccess,
    logInFailure
} from './actions'

import {
    loginApi
} from './api'


function* loginEffectSaga(action) {
    try {
        const {email, password, router} = action.payload;

        let { token } = yield call(loginApi, {email, password});

        let tokenPair = {
            token: token,
            expiry: '2'
        }

        yield put(logInSuccess(tokenPair))

        router.push('/');

    } catch (error) {
        console.log('error', error)
        // yield put(logInFailure(error.response.data.detail))
    }
}

export function* loginWatcherSaga() {
    yield takeLatest('LOG_IN_REQUESTED', loginEffectSaga)
}