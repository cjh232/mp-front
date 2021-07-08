import { all } from 'redux-saga/effects';

import {
    loginWatcherSaga,
    registerWatcherSaga
} from './auth/auth.sagas';

import {
    onProductsListRequest,
    onCategoryDetailsRequest,
    onApplyFiltersRequest,
    onProductDetailsRequest,
    onProductSizesRequest
} from './store/store.sagas';

export default function* rootSaga() {
    yield all([
        loginWatcherSaga(),
        registerWatcherSaga(),
        onProductsListRequest(),
        onCategoryDetailsRequest(),
        onApplyFiltersRequest(),
        onProductDetailsRequest(),
        onProductSizesRequest()
    ])
};