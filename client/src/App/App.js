import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'


import {useAuth} from 'Common/utils/hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {useRoutes} from 'App/routes'
import './App.scss'
import {getAllCollection, getAllUsers, getMyCollection} from 'Redux/actions/action'


function App() {
  const {login, logout, token, userId, ready, userName} = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    testAuth()
  }, [])

  const isAuthenticated = !!token

  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return null
  }

  // подумать над логикой
  function testAuth() {
    try {
      fetch('http://localhost:5000/auth/testAuth',
              {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data, 'super');
                localStorage.setItem('token', data.token)
              });

    } catch (e) {
      console.log(e)
    }
  }



  (function getAllData(){
    dispatch(getMyCollection(userId))
    dispatch(getAllCollection())
    dispatch(getAllUsers())
  })()

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
