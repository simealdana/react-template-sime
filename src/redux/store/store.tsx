//@ts-nocheck
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import session from 'redux-persist/lib/storage/session';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import createSagaMiddleware from 'redux-saga';
import combineReducers from '../reducers/reducer';
import root from '../sagas/sagas';

const composeEnhancers = compose;
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
	key: 'userSession',
	storage: session,
	whitelist: ['sesion'],
	stateReconciler: autoMergeLevel1
};

const pReducer = persistReducer(persistConfig, combineReducers);

export const store = createStore(
	pReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(root);
export const persistor = persistStore(store);
