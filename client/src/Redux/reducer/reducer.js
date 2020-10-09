import {combineReducers} from 'redux'
import {appReducer} from './reducers/appReducer'
import {folderReducer} from './reducers/folderReducer'
import {gameReducer} from './reducers/gameReducer'
import {userReducer} from './reducers/userReducer'

const reducer = combineReducers({
  appReducer,
  folderReducer,
  gameReducer,
  userReducer
})

export default reducer
