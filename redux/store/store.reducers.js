import types from './store.types'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const productListReducer = (state = {
    loading: false, 
    products: [], 
    next: '',
    previous: '',
    error: null
}, action) => {
    switch(action.type) {
        case types.PRODUCT_LIST_START:
            return {...state, loading: true}
        case types.PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}
        case types.PRODUCT_LIST_FAILURE:
            return {loading: false, products: [], error: payload}
        case types.UPDATE_LIST_START:
            return {loading: true, ...state}
        case types.UPDATE_LIST_SUCCESS:
            return {loading: false, products: action.payload, error: null}
        case types.UPDATE_LIST_FAILURE:
            return {loading: true, error: action.payload}
        default:
            return state
    }
}

const productReducer = (state = {loading: false, product: null}, action) => {
    switch(action.type) {
        case types.PRODUCT_DETAILS_START:
            return {...state, loading: true};
        case types.PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload, error: null};
        case types.PRODUCT_LIST_FAILURE:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

const initFilters = {
    sizes: [],
    colors: [],
    brands: [],
}

const filtersReducer = (state = initFilters, action) => {
    switch(action.type) {
        case types.LOAD_FILTERS:
            return action.payload
        default:
            return state;
    }
}

const initCategories = {
    loading: false,
    parent: '',
    category: '',
    sub_categories: [],
    error: null,
}

const categoriesReducer = (state = initCategories, action) => {
    switch(action.type) {
        case types.CATEGORY_DETAIL_START:
            return {...state, loading: true};
        case types.CATEGORY_DETAIL_SUCCESS:
            return {
                loading: false,
                parent: action.payload.parent,
                category: action.payload.category,
                sub_categories: action.payload.sub_categories,
                error: null,
            };
        case types.CATEGORY_DETAIL_FAILURE:
            return {
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}

const productListPersistConfig = {
    key: 'productList',
    storage: storage,
    blacklist: ['products']
  }

const categoriesPersistConfig = {
    key: 'categories',
    storage: storage,
    blacklist: ['sub_categories']
  }

const productListPersistReducer = persistReducer(productListPersistConfig, productListReducer);
const categoriesReducerPersist = persistReducer(categoriesPersistConfig, categoriesReducer)

export {
    productListPersistReducer,
    filtersReducer,
    categoriesReducerPersist,
    productReducer
};