import {combineReducers} from 'redux'
import {appReducer} from './reducers/appReducer'
import {collectionReducer} from './reducers/collectionReducer'
import {usersReducer} from './reducers/usersReducer'

const reducer = combineReducers({
  appReducer,
  collectionReducer,
  usersReducer
})

export default reducer
