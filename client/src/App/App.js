import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'


import {useAuth} from 'Common/utils/hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {useRoutes} from 'App/routes'
import './App.scss'
import {checkToken, getAllCollection, getAllUsers, getMyCollection} from 'Redux/actions/action'


function App() {
  const {login, logout, token, userId, ready, userName} = useAuth()
  const dispatch = useDispatch()

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
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated, userName
    }}>
      <div className="App">
        {routes}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
