import React, {useEffect, useState} from 'react'
import {useHttp} from 'Common/utils/hooks/http.hook'

import './Search.scss'
import {SearchTemplate} from './Search.template'

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
  const {error, request, clearError} = useHttp()
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
      const data = await request('http://localhost:5000/collection/search', 'POST', searchElement)
      setResultSearch(data)

    } catch (e) {
      console.log(e)
    }
  }

  return resultSearch
}
