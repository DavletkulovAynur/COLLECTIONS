import reducer from "./reducers/reducer";
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from './sagas/index'

const saga = createSagaMiddleware()

const store = createStore(reducer, compose(applyMiddleware(saga)))

saga.run(sagaWatcher)

export default store
