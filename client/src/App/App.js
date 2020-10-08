import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './App.scss'
import {getArticle} from "../Common/utils/templates";
import {Alert} from "Common/components/Alert/Alert";
import {useAuth} from 'Common/utils/hooks/auth.hook'
import {AuthContext} from "./context/AuthContext";
import {useRoutes} from "App/routes";


function App() {
  const {login, logout, token, userId, ready} = useAuth()
  const dispatch = useDispatch()
  const stateAlert = useSelector(state => state.appReducer.alert)
  const [statePopup, setStatePopup] = useState(true)

  const isAuthenticated = !!token

  const routes = useRoutes(isAuthenticated)

  // первоначальное обновление данных
  useEffect(() => {
    getArticle(dispatch)
    console.log('первоначальное обновление данных')
  }, [])

  const changeStatePopup = () => {
    setStatePopup(!statePopup)
  }

  if (!ready) {
    return null
  }

  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated
    }}>
      <div className="App">
        {routes}
        {/*{stateAlert ? <Alert/> : null}*/}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
