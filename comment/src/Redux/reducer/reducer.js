import {combineReducers} from 'redux'
import {appReducer} from './reducers/appReducer'
import {folderReducer} from './reducers/folderReducer'
import {gameReducer} from './reducers/gameReducer'

const reducer = combineReducers({
  appReducer,
  folderReducer,
  gameReducer
})

export default reducer
