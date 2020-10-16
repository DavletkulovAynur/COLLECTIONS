import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getMyCollection} from 'Redux/actions/action'
import {CommonCard} from 'Common/components/CommonCard/CommonCard'
import './MyCollection.scss'

export function MyCollection() {
  const dispatch = useDispatch()
  const collection = useSelector(state => state.myCollectionReducer)

  useEffect(() =>{
    dispatch(getMyCollection())
  }, [])

  console.log(collection)
  return (
    <div className='My-collection'>
      <div className='Com-main-grid'>
        <CommonCard data={collection}/>
      </div>
    </div>
  )
}
