import {combineReducers} from 'redux'
import {appReducer} from './reducers/appReducer'
import {collectionReducer} from './reducers/collectionReducer'
import {usersReducer} from './reducers/usersReducer'
import {authReducer} from './reducers/authReducer'

const reducer = combineReducers({
  appReducer,
  collectionReducer,
  usersReducer,
  authReducer
})

export default reducer
