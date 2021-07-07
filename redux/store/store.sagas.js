import { takeLatest, call, put } from 'redux-saga/effects';
import { 
    productListApi,
    categoryApi,
    filterProductsApi,
    productDetailsApi
} from './store.api';

import {
    listProductsStart,
    listProductsFailure,
    listProductsSuccess,
    getCategoryDetailsStart,
    getCategoryDetailsSuccess,
    getCategoryDetailsFailute,
    updateProductsListStart,
    updateProductsListSuccess,
    updateProductsListFailure,
    loadFilters,
    productDetailsStart,
    productDetailsSuccess,
    productDetailsFailure
} from './store.actions';

import types from './store.types';

export function* getProductsList(action) {

    yield put(listProductsStart())

    try {
        const category = action.payload;
        
        let response = yield(call(productListApi, category))

        const products = response.data;

        yield put(listProductsSuccess(products))
    } catch (error) {
        console.log(error)
    }
}

export function* getCategoryDetails(action) {
    yield put(getCategoryDetailsStart());

    try {
        const category = action.payload;

        let response = yield(call(categoryApi, category))

        const parent = response.data.parent || 'All'
        const filters = response.data.filters 
        console.log('filters', filters)
        const sub_categories = response.data.children 

        yield put(loadFilters(filters))
        yield put(getCategoryDetailsSuccess({category, sub_categories, parent}))
    } catch (error) {
        console.log(error)
    }
}

export function* updateProductsList(action) {
    yield put(updateProductsListStart());

    try {
        const filters = action.payload;

        let response = yield(call(filterProductsApi, filters))

        yield put(updateProductsListSuccess(response.data))

        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

export function* getProductDetails(action) {
    yield put(productDetailsStart())

    try {
        const productId = action.payload

        let productDetails = yield(call(productDetailsApi, productId))

        yield put(productDetailsSuccess(productDetails))
        
    } catch (error) {
        console.log(error)
    }
}

export function* onProductsListRequest() {
    yield takeLatest(types.PRODUCT_LIST_REQUEST, getProductsList)
}

export function* onCategoryDetailsRequest() {
    yield takeLatest(types.CATEGORY_DETAIL_REQUEST, getCategoryDetails)
}

export function* onApplyFiltersRequest() {
    yield takeLatest(types.APPLY_FILTERS_REQUEST, updateProductsList)
}

export function* onProductDetailsRequest() {
    yield takeLatest(types.PRODUCT_DETAILS_REQUEST, getProductDetails)
}