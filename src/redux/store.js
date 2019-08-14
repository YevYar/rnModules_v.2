/**
 * This is a Redux store of the app.
 *
 * @format
 */

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const initState = {cropPickerState: { domainData: { chosenMedia: [], takenMedia: [] } }};

const saga = createSagaMiddleware();

const store = createStore(rootReducer, initState, applyMiddleware(saga));
saga.run(rootSaga);

export default store;
