import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import './App.scss'
import Main from './pages/Main/Main'
import ArticleView from "./pages/ArticleView/ArticleView";
import {getArticle} from "../Common/utils/templates";
import Nav from "Common/components/Nav/Nav";
import AddArticle from "./pages/AddArticle/AddArticle";
import {Header} from "Common/components/Header/Header";
import {Alert} from "Common/components/Alert/Alert";
import {AuthPopup} from 'Common/components/AuthPopup/AuthPopup'
import {useAuth} from 'Common/utils/hooks/auth.hook'
import {AuthContext} from "./context/AuthContext";


function App() {
  const {login, logout, token, userId} = useAuth
  const dispatch = useDispatch()
  const stateAlert = useSelector(state => state.appReducer.alert)
  const [statePopup, setStatePopup] = useState(false)

  const isAuthenticated = !!token
  // первоначальное обновление данных
  useEffect(() => {
    getArticle(dispatch)
    console.log('первоначальное обновление данных')
  }, [])

  const changeStatePopup = () => {
    setStatePopup(true)
  }

  return (
    <AuthContext.Provider value={{
      login, logout, token, userId
    }}>
      <div className="App">
        <Header changeStatePopup={changeStatePopup}/>
        <div className='page'>
          <div className='Nav-wrapper'>
            <Nav/>
          </div>
          <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/article-view/:id' component={ArticleView} exact/>
            <Route path='/add' component={AddArticle} exact/>
          </Switch>
        </div>
        {stateAlert ? <Alert/> : null}
        {statePopup ? <AuthPopup/> : null}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
