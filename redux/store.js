import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';

//Creates saga middleware
const sagaMiddleware = createSagaMiddleware();

//Persist storage config
const persistConfig = {
    key: 'root',
    storage,    //AsyncStorage
    whitelist: ['login']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

//Redux Dev Tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creates the redux store with persisted data
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

//Persist the redux store data
const persistor = persistStore(store);

export { store, persistor, sagaMiddleware };

