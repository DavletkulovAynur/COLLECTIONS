import {combineReducers} from 'redux'
import {appReducer} from './reducers/appReducer'
import {folderReducer} from './reducers/folderReducer'
import {gameReducer} from './reducers/gameReducer'
import {userReducer} from './reducers/userReducer'
import {myCollectionReducer} from './reducers/myCollectionReducer'

const reducer = combineReducers({
  appReducer,
  folderReducer,
  gameReducer,
  userReducer,
  myCollectionReducer
})

export default reducer
