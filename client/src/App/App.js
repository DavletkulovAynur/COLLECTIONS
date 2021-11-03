import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {useRoutes} from 'App/routes'
import './App.scss'
import {checkToken, getAllCollection, getMyCollection} from '../Store/actions/action'
import {ShowMessage} from "../Common/components/ShowMessage/ShowMessage";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {  faCheckSquare,
  faCoffee,
  faTimes,
  faEye,
  faEyeSlash,
  faArrowAltCircleUp,
  faPlus,
  faSignOutAlt,
  faBookmark,
  faArchive,
  faPencilAlt,
  faStream,
  faCheck,
  faTrashAlt,
  faChevronLeft,
  faEllipsisH,
  faEllipsisV,
  faHome,
  faUser,
  faSearch,
  faChevronRight,
  faUserFriends, } from '@fortawesome/free-solid-svg-icons'
import {PopUpCard} from "../Common/components/PopUpCard/PopUpCard";
import { showMessageAction } from 'Store/reducers/components/showMessageReducer'
import { PopupAlert } from 'Common/components/PopupAlert/PopupAlert'


library.add(fab, faChevronRight, faUser, faSearch, faHome, faEllipsisH, faEllipsisV, faCheck, faCheckSquare, faCoffee, faTimes, faEye, faEyeSlash, faArrowAltCircleUp, faPlus, faSignOutAlt, faBookmark, faArchive, faStream, faUserFriends, faTrashAlt, faPencilAlt, faChevronLeft)


function App() {
  const dispatch = useDispatch()
  const {token, owner, ready, isAuthenticated, active} = useSelector((state) => state.authReducer)
  const {showMessage, text, severity} = useSelector((state) => state.showMessageReducer)

  const {userId} = owner
  const routes = useRoutes(isAuthenticated, active)

  useEffect(() => {
    dispatch(checkToken())
  }, [])

  useEffect(() => {
    if(isAuthenticated) {
      dispatch(getMyCollection(userId))
      dispatch(getAllCollection())
    }
  }, [isAuthenticated])

  if (!ready) {
    return null
  }


  if(token) {
    localStorage.setItem('token', token)
  }

  function test() {
    dispatch(showMessageAction({text: 'успешно'}))
  }

  return (
    <div className="App">
      {routes}
      <ShowMessage showMessage={showMessage} text={text} severity={severity}/>
      <PopUpCard/>
      <PopupAlert/>
    </div>
  );
}

export default App;
