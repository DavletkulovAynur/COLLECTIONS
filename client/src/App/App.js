import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {useRoutes} from 'App/routes'
import './App.scss'
import {checkToken, getAllCollection, getMyCollection} from 'Redux/actions/action'
import {ShowMessage} from "../Common/components/ShowMessage/ShowMessage";


function App() {
  const dispatch = useDispatch()
  const {token, userId, ready, isAuthenticated, active} = useSelector((state) => state.authReducer)
  const {showMessage, text, severity} = useSelector((state) => state.showMessageReducer)

  const routes = useRoutes(isAuthenticated)

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

  console.log('active', active)
  // if(!active) {
  //   return (
  //     <div className='App'>
  //         <h1>Подтвердите пожалуйста свой доступ</h1>
  //     </div>
  //   )
  // }

  return (
    <div className="App">
      {routes}
      <ShowMessage showMessage={showMessage} text={text} severity={severity}/>
    </div>
  );
}

export default App;
