import React, {useEffect, useReducer, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'



import {useRoutes} from 'App/routes'
import './App.scss'
import {checkToken, getAllCollection, getAllUsers, getMyCollection} from 'Redux/actions/action'



function App() {
  const dispatch = useDispatch()
  const {token, userId, ready} = useSelector((state) => state.authReducer)

  const isAuthenticated = !!token
  console.log(isAuthenticated)

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
