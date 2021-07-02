import { combineReducers } from "redux";

// import signInReducer from './auth/auth.reducers';

import {
    authPersistReducer,
    registerUserReducer
} from './auth/auth.reducers'

const rootReducer = combineReducers({
    auth: authPersistReducer, 
    userRegister: registerUserReducer
})

export default rootReducer;