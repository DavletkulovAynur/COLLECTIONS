import React, {useEffect, useState} from 'react'
import {SearchTemplate} from './Search.template'

import {useDispatch, useSelector} from 'react-redux'
import {searchCollectionAction} from '../../../Redux/actions/action'

import './Search.scss'


export function Search() {
  const dispatch = useDispatch()
  const [value, setValue] = useState()
  const {searchCollection} = useSelector((state) => state.collectionReducer)

  useEffect(() => {
    if(value) {
      const searchElement = {
        value
      }
      dispatch(searchCollectionAction(searchElement))
    }
  }, [value])


  const getInputValue = (value) => {
    console.log('getInputValue', value)
    setValue(value)
  }

  return (
    <SearchTemplate searchResult={searchCollection} getInputValue={getInputValue}/>
  )
}


