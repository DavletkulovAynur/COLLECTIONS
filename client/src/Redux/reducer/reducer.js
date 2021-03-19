import {combineReducers} from 'redux'
import {appReducer} from './reducers/appReducer'
import {collectionReducer} from './reducers/collectionReducer'
import {usersReducer} from './reducers/usersReducer'
import {authReducer} from './reducers/authReducer'
import {addCollectionReducer} from './reducers/addCollectionReducer'
import {personalPageReducer} from './reducers/personalPageReducer'

const reducer = combineReducers({
  appReducer,
  collectionReducer,
  usersReducer,
  authReducer,
  addCollectionReducer,
  personalPageReducer
})

export default reducer
