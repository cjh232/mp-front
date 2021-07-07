import types from './store.types'

export const addSizeFilter = (list) => {
    return { type: types.SIZE_FILTER_ADD, payload: list }
}

export const addColorFilter = (list) => {
    return { type: types.COLOR_FILTER_ADD, payload: list}
}

export const applyFilters = (filters) => {
    return {type: types.APPLY_FILTERS_REQUEST, payload: filters}
}

export const updateProductsListStart = () => {
    return {type: types.UPDATE_LIST_START}
}

export const updateProductsListSuccess = (list) => {
    return {type: types.UPDATE_LIST_SUCCESS, payload: list}
}

export const updateProductsListFailure = () => {
    return {type: types.UPDATE_LIST_FAILURE}
}

export const clearFilters = () => {
    return {type: types.CLEAR_FILTERS}
}

export const listProducts = (category) => {
    return {type: types.PRODUCT_LIST_REQUEST, payload: category}
}

export const listProductsStart = () => {
    return {type: types.PRODUCT_LIST_START}
}

export const listProductsSuccess = (products) => {
    return {type: types.PRODUCT_LIST_SUCCESS, payload: products}
}

export const listProductsFailure = (products) => {
    return {type: types.PRODUCT_LIST_FAILURE}
}

export const getCategoryDetails = (category) => {
    return {type: types.CATEGORY_DETAIL_REQUEST, payload: category}
}

export const getCategoryDetailsStart = () => {
    return {type: types.CATEGORY_DETAIL_START}
}

export const getCategoryDetailsSuccess = ({category, sub_categories, parent}) => {
    return {type: types.CATEGORY_DETAIL_SUCCESS, payload: {category, sub_categories, parent}}
}

export const getCategoryDetailsFailute = (error) => {
    return {type: types.CATEGORY_DETAIL_FAILURE, payload: error}
}

export const loadFilters = (filtersArray) => {
    return {type: types.LOAD_FILTERS, payload: filtersArray}
}

export const getProductDetails = (id) => {
    return {type: types.PRODUCT_DETAILS_REQUEST, payload: id}
}

export const productDetailsStart = () => {
    return {type: types.PRODUCT_DETAILS_START}
}

export const productDetailsSuccess = (productDetails) => {
    return {type: types.PRODUCT_DETAILS_SUCCESS, payload: productDetails}
}

export const productDetailsFailure = (error) => {
    return {type: types.PRODUCT_DETAILS_FAILURE}
}