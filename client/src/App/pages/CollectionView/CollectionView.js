import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'Common/utils/hooks/useRouter.hook'

import {CollectionViewTemplate} from './Components/CollectionViewTemplate'
import './CollectionView.scss'
import {commentUpdateAction, getCollectionViewAction} from "../../../Redux/actions/action";


function CollectionView() {
  const dispatch = useDispatch()
  const router = useRouter()
  const {collection, comments} = useSelector(state => state.collectionViewReducer)
  const collectionId = router.match.params.id

  useEffect(() => {
    dispatch(getCollectionViewAction({collectionId}))
  }, [])

  const handleSubmit = (commentValue, commentTitle) => {
    const comment = {
      description: commentValue,
      title: commentTitle,
      id: collectionId,
    }

    dispatch(commentUpdateAction(comment))
  }

  if(!collection.length) {
    return (
      <h1>LOADING</h1>
    )
  }

  return(
    <div className='Collection-view'>
      <CollectionViewTemplate comments={comments} collection={collection[0]} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default CollectionView


