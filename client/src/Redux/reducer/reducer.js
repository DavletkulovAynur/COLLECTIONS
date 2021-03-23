import {combineReducers} from 'redux'
import {appReducer} from './reducers/appReducer'
import {collectionReducer} from './reducers/collectionReducer'
import {authReducer} from './reducers/authReducer'
import {addCollectionReducer} from './reducers/addCollectionReducer'
import {personalPageReducer} from './reducers/personalPageReducer'

const reducer = combineReducers({
  appReducer,
  collectionReducer,
  authReducer,
  addCollectionReducer,
  personalPageReducer
})

export default reducer
