import React, {useContext} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Main from "App/pages/Main/Main";
import AddArticle from "App/pages/AddCollection/AddCollection";
import {Header} from "Common/components/Header/Header";
import Nav from "Common/components/Nav/Nav";
import {Auth} from "App/pages/Auth/Auth";
import {MyCollection} from "App/pages/MyCollection/MyCollection";
import CollectionView from "App/pages/CollectionView/CollectionView";

export const useRoutes = isAuthenticated => {
  if(isAuthenticated) {
    return (
      <div>
        <Header/>
        <div className='page'>
          <div className='Nav-wrapper'>
            <Nav/>
          </div>
          <Switch>
            <Route exact path='/'>
              <Main/>
            </Route>
            <Route exact path='/article-view/:id'>
              <CollectionView/>
            </Route>
            <Route exact path='/add'>
              <AddArticle/>
            </Route>
            <Route exact path='/my-collection'>
              <MyCollection/>
            </Route>
            <Redirect to="/"/>
          </Switch>
        </div>
      </div>
    )
  }

  return (
      <div className='page'>
        <div className='Auth-page-wrapper'>
          <Switch>
            <Route exact path='/login'>
              <Auth/>
            </Route>
            <Redirect to="/login"/>
          </Switch>
        </div>
      </div>
  )
}
