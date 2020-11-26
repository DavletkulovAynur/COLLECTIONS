import React, {useContext, useEffect, useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getMyCollection} from 'Redux/actions/action'
import {CommonCard} from 'Common/components/CommonCard/CommonCard'
import './MyCollection.scss'
import {MainPageHeader} from "App/pages/Main/сomponents/MainPageHeader";
import {AuthContext} from "App/context/AuthContext";

export function MyCollection() {
  const dispatch = useDispatch()
  const {myCollection} = useSelector(state => state.collectionReducer)
  const auth = useContext(AuthContext)

  useEffect(() =>{
    console.log('auth', auth.userId)
    dispatch(getMyCollection(auth.userId))
  }, [])

  return (
    <div className='My-collection'>
      {/*<div className='main-page-header-wrapper'>*/}
      {/*  <MainPageHeader/>*/}
      {/*</div>*/}
      <div className='Com-main-grid'>
        <CommonCard data={myCollection}/>
      </div>
    </div>
  )
}
