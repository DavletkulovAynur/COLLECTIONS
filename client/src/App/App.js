import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {useRoutes} from 'App/routes'
import './App.scss'
import {checkToken, getAllCollection, getAllUsers, getMyCollection} from 'Redux/actions/action'


function App() {
  const dispatch = useDispatch()
  const {login, token, userId, ready, userName} = useSelector((state) => state.authReducer)

  console.log(ready)
  const isAuthenticated = !!token

  const routes = useRoutes(isAuthenticated)

  useEffect(() => {
    dispatch(checkToken())
    if(isAuthenticated) {
      dispatch(getMyCollection(userId))
      dispatch(getAllCollection())
      dispatch(getAllUsers())
    }
  }, [isAuthenticated])

  if (!ready) {
    return null
  }

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
