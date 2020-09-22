import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import './App.scss'
import Main from './pages/Main/Main'
import ArticleView from "./pages/ArticleView/ArticleView";
import {getArticle} from "../Common/utils/templates";
import Nav from "../Common/components/Nav/Nav";
import AddArticle from "./pages/AddArticle/AddArticle";


function App() {
  const dispatch = useDispatch()
  // первоначальное обновление данных
  useEffect(() => {
    getArticle(dispatch)
  }, [])

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
