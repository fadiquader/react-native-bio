import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'
// import thunk from "redux-thunk"
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
];

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;