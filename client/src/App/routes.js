import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import AddArticle from 'App/pages/AddCollection/AddCollection'
import {Header} from 'Common/components/Header/Header'
import {Auth} from 'App/pages/Auth/Auth'
import CollectionView from 'App/pages/CollectionView/CollectionView'
import {PersonalArea} from 'App/pages/PersonalArea/PersonalArea'
import CollectionsList from './pages/CollectionsList/CollectionsList'
import UserArea from './pages/UserArea/UserArea'
import ConfirmEmailBlock from "../Common/components/ConfirmEmailBlock/ConfirmEmailBlock";
import {FooterMobile} from "../Common/components/FooterMobile/FooterMobile";
import {SearchPageMobile} from "../Common/components/SearchPageMobile/SearchPageMobile";

export const useRoutes = (isAuthenticated, active) => {
  if(isAuthenticated) {

    if(!active) {
      return (
       <ConfirmEmailBlock/>
      )
    }

    return (
      <>
        <section className='content'>
          <Header/>
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
              <Route exact path='/user-area/:id'>
                <UserArea/>
              </Route>
              <Route exact path='/search-mobile'>
                <SearchPageMobile/>
              </Route>
              <Redirect to="/"/>
            </Switch>
        </section>
        <FooterMobile/>
      </>
    )
  }

  return (
      <>
          <Switch>
            <Route exact path='/login'>
              <Auth/>
            </Route>
            <Redirect to="/login"/>
          </Switch>
      </>
  )
}
