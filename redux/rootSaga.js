import { all } from 'redux-saga/effects';

import {
    loginWatcherSaga
} from './auth/saga';


export default function* rootSaga() {
    yield all([
        loginWatcherSaga(),
    ])
};