import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import AddArticle from 'App/pages/AddCollection/AddCollection'
import {Header} from 'Common/components/Header/Header'
import {Auth} from 'App/pages/Auth/Auth'
import CollectionView from 'App/pages/CollectionView/CollectionView'
import {PersonalArea} from 'App/pages/PersonalArea/PersonalArea'

import UserArea from './pages/UserArea/UserArea'

import {FooterMobile} from "../Common/components/FooterMobile/FooterMobile";
import {SearchPageMobile} from "../Common/components/SearchPageMobile/SearchPageMobile";
import EditUserPage from "./pages/EditUserPage/EditUserPage";
import MainPage from "./pages/MainPage/MainPage";
import ConfirmEmailPage from "./pages/ConfirmEmailPage/ConfirmEmailPage";

const routes = [
  {
    path: '/',
    component: MainPage,
    exact: true,
  },
  {
    path: '/article-view/:id',
    component: CollectionView,
    exact: true,
  },
  {
    path: '/add',
    component: AddArticle,
    exact: true,
  },
  {
    path: '/personal-area',
    component: PersonalArea,
    exact: true,
  },
  {
    path: '/personal-area/edit-user',
    component: EditUserPage,
    exact: true,
  },
  {
    path: '/user-area/:id',
    component: UserArea,
    exact: true,
  },
  {
    path: '/search-mobile',
    component: SearchPageMobile,
    exact: true,
  }
]

export const useRoutes = (isAuthenticated, active) => {
  if(isAuthenticated) {

    if(!active) {
      return (
        <>
          <ConfirmEmailPage/>
        </>
      )
    }

    return (
      <>
       <Header/>
        <section className='App-root'>
            <Switch>
              {routes.map((r, index) => {
                const {...props} = r
                return (
                  <Route key={index} {...props}/>
                )
              })}
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
            <Route exact path='/'>
              <Auth/>
            </Route>
            <Redirect to="/"/>
          </Switch>
      </>
  )
}
