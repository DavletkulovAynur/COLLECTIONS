import React, {useEffect, useState} from 'react'
import {SearchTemplate} from './Search.template'
import Fetcher from '../../../Common/utils/fetch'

import './Search.scss'


export function Search() {
  const [value, setValue] = useState()
  const {searchResult = []} = GetItemBySearch(value)

  const getInputValue = (value) => {
    setValue(value)
  }

  return (
    <SearchTemplate searchResult={searchResult} getInputValue={getInputValue}/>
  )
}

function GetItemBySearch(value) {
  const [resultSearch, setResultSearch] = useState('')

  useEffect(() => {
    if(value) {
      sendingRequestToServer()
    }
  }, [value])

  const sendingRequestToServer = async () => {

    try {
      const searchElement = {
        value
      }

      //Search saga
      const data = await Fetcher('http://localhost:5000/collection/search', 'POST', searchElement)
      console.log('result', data)
      // Испраить ошибку data
      setResultSearch(data.data)

    } catch (e) {
      console.log(e)
    }
  }

  return resultSearch
}
