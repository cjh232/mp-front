import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

import createSagaMiddleware from '@redux-saga/core';

import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

/** DEV TOOLS */
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleWare = createSagaMiddleware();

let middlewares = applyMiddleware(sagaMiddleWare, logger);

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['userRegister']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, {}, composeWithDevTools(
    middlewares,
))

const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);

export {
    store,
    persistor
};