import React, {useEffect, useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getMyCollection} from 'Redux/actions/action'
import {CommonCard} from 'Common/components/CommonCard/CommonCard'
import './MyCollection.scss'
import {MainPageHeader} from "App/pages/Main/сomponents/MainPageHeader";

export function MyCollection() {
  const dispatch = useDispatch()
  const {myCollection} = useSelector(state => state.collectionReducer)

  useEffect(() =>{
    dispatch(getMyCollection())
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
