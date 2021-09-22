import reducer from "./reducers/reducer";
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas/index'

const saga = createSagaMiddleware()

const store = createStore(reducer, compose(applyMiddleware(saga)))

saga.run(rootSaga)

export default store
