import {combineReducers} from 'redux'
import {appReducer} from './reducers/appReducer'
import {collectionReducer} from './reducers/collectionReducer'
import {authReducer} from './reducers/authReducer'
import {addCollectionReducer} from './reducers/addCollectionReducer'
import {personalPageReducer} from './reducers/personalPageReducer'
import {collectionViewReducer} from './reducers/collectionViewReducer'

const reducer = combineReducers({
  appReducer,
  collectionReducer,
  authReducer,
  addCollectionReducer,
  personalPageReducer,
  collectionViewReducer
})

export default reducer
