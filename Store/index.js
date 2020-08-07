import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';

import reducer from '../Reducer/index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['planReducer', 'authReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(logger));

let persistor = persistStore(store);

export { store, persistor };
