import React, {useContext} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import AddArticle from "App/pages/AddCollection/AddCollection";
import {Header} from "Common/components/Header/Header";
import Nav from "Common/components/Nav/Nav";
import {Auth} from "App/pages/Auth/Auth";
import CollectionView from "App/pages/CollectionView/CollectionView";
import {PersonalArea} from 'App/pages/PersonalArea/PersonalArea'
import CollectionsList from './pages/CollectionsList/CollectionsList'

export const useRoutes = isAuthenticated => {
  if(isAuthenticated) {
    return (
      <>
        <Header/>
        <div className='page'>
          <div className='Nav-wrapper'>
            <Nav/>
          </div>
          <Switch>
            <Route exact path='/'>
              <CollectionsList/>
            </Route>
            <Route exact path='/article-view/:id'>
              <CollectionView/>
            </Route>
            <Route exact path='/add'>
              <AddArticle/>
            </Route>
            <Route exact path='/my-collection'>
              <CollectionsList/>
            </Route>
            <Route exact path='/personal-area'>
              <PersonalArea/>
            </Route>
            <Redirect to="/"/>
          </Switch>
        </div>
      </>
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
