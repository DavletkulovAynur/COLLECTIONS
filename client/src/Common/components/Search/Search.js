import {useInput} from 'Common/utils/hooks/input.hook'
import React, {useEffect, useState} from 'react'
import {useHttp} from 'Common/utils/hooks/http.hook'

import './Search.scss'
import {Link} from "react-router-dom";

export function Search() {
  const search = useInput('')

  const {searchResult = []} = SearchCollection(search)

  const $resultElements = () => {
    if(searchResult) {
      return searchResult.map((item, index) => {
        return (
          <div key={index} className='item'>
            <Link to={`/article-view/${item._id}`} className='link'>
              <img src={item.img}/>
              <span className='title'> {item.title}</span>
            </Link>
          </div>
        )
      })
    }
  }

  return (
    <div className='Search'>
      <input type="text" className="search-input" placeholder="Search" {...search.bind}/>
      {searchResult.length
        ?  <div className='show-result'>
          {$resultElements()}
        </div>
        : null}
    </div>
  )
}

function SearchCollection(search) {
  const {error, request, clearError} = useHttp()
  const [test, setTest] = useState('')

  useEffect( () => {
    if(search.value) {
      searchFunc()
    } else {
      setTest('')
    }
  }, [search.value])

  const searchFunc = async () => {
    try {
      const searchElement = {
        value: search.value
      }

      const data = await request('http://localhost:5000/collection/search', 'POST', searchElement)
      setTest(data)

    } catch (e) {
      console.log(e)
    }
  }

  return test
}
