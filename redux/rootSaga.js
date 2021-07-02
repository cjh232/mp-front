import { all } from 'redux-saga/effects';

import {
    loginWatcherSaga,
    registerWatcherSaga
} from './auth/auth.sagas';


export default function* rootSaga() {
    yield all([
        loginWatcherSaga(),
        registerWatcherSaga()
    ])
};