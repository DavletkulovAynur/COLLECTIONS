import {combineReducers} from 'redux'
import {appReducer} from './reducers/appReducer'
import {collectionReducer} from './reducers/collectionReducer'
import {usersReducer} from './reducers/usersReducer'
import {authReducer} from './reducers/authReducer'
import {addCollectionReducer} from './reducers/addCollectionReducer'

const reducer = combineReducers({
  appReducer,
  collectionReducer,
  usersReducer,
  authReducer,
  addCollectionReducer
})

export default reducer
