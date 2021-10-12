import {combineReducers} from 'redux'
import {collectionReducer} from './components/collectionReducer'
import {authReducer} from './components/authReducer'
import {addCollectionReducer} from './components/addCollectionReducer'
import {userEditReducer} from './components/userEditReducer'
import {collectionViewReducer} from './components/collectionViewReducer'
import {userAreaPageReducer} from './components/userAreaPageReducer'
import {subscribeReducer} from './components/subscribeReducer'
import {showMessageReducer} from './components/showMessageReducer'
import {PopUpCardReducer} from './components/PopUpCardReducer'
import {deleteCollectionReducer} from './components/deleteCollectionReducer'

const reducer = combineReducers({
  collectionReducer,
  authReducer,
  addCollectionReducer,
  userEditReducer,
  collectionViewReducer,
  userAreaPageReducer,
  subscribeReducer,
  showMessageReducer,
  PopUpCardReducer,
  deleteCollectionReducer
})

export default reducer
