import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {useRoutes} from 'App/routes'
import './App.scss'
import {checkToken, getAllCollection, getMyCollection} from 'Redux/actions/action'
import {ShowMessage} from "../Common/components/ShowMessage/ShowMessage";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faTimes)


function App() {
  const dispatch = useDispatch()
  const {token, userId, ready, isAuthenticated, active} = useSelector((state) => state.authReducer)
  const {showMessage, text, severity} = useSelector((state) => state.showMessageReducer)

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

  return (
    <div className="App">
      {routes}
      <ShowMessage showMessage={showMessage} text={text} severity={severity}/>
    </div>
  );
}

export default App;
