import reducer from "./reducer/reducer";
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from './sagas/index'

const saga = createSagaMiddleware()

const store = createStore(reducer, compose(applyMiddleware(thunk, saga)))

saga.run(sagaWatcher)

export default store
