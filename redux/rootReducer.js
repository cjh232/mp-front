import { combineReducers } from "redux";

// import signInReducer from './auth/auth.reducers';

import {
    authPersistReducer,
    registerUserReducer,
} from './auth/auth.reducers'

import {
    filtersReducer,
    productListPersistReducer,
    categoriesReducerPersist,
    productReducer,
    sizesReducer
} from './store/store.reducers'

const rootReducer = combineReducers({
    auth: authPersistReducer, 
    userRegister: registerUserReducer,
    productList: productListPersistReducer,
    filters: filtersReducer,
    categories: categoriesReducerPersist,
    productDetails: productReducer,
    sizes: sizesReducer,
})

export default rootReducer;