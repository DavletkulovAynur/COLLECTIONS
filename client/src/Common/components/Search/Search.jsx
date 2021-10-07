import React, {useEffect} from 'react'
import {SearchTemplate} from './Search.template'
import {useDispatch, useSelector} from 'react-redux'
import {searchCollectionAction} from '../../../Store/actions/action'
import './Search.scss'
import {useInput} from "../../utils/hooks/input.hook";
import {inputClear} from "../../utils/inputClear";


export function Search() {
  const dispatch = useDispatch()
  const search = useInput('')
  const {searchCollection, searchCollectionState} = useSelector((state) => state.collectionReducer)

  useEffect(() => {
    if(search.value) {
      const searchElement = {
        value: search.value
      }
      dispatch(searchCollectionAction(searchElement))
    }
  }, [search.value])

  const viewResultSearch = () => {
    inputClear([search])
  }

  return (
    <SearchTemplate
      viewResultSearch={viewResultSearch}
      search={search}
      searchCollectionState={searchCollectionState}
      searchResult={searchCollection}
    />
  )
}


