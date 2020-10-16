import {combineReducers} from 'redux'
import {appReducer} from './reducers/appReducer'
import {collectionReducer} from './reducers/collectionReducer'

const reducer = combineReducers({
  appReducer,
  collectionReducer
})

export default reducer
