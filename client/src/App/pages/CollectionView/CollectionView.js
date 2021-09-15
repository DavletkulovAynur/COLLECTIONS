import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'Common/utils/hooks/useRouter.hook'

import {CollectionViewTemplate} from './CollectionViewTemplate'

import {commentUpdateAction, getCollectionViewAction} from '../../../Redux/actions/action'


function CollectionView() {
  const dispatch = useDispatch()
  const router = useRouter()
  const {collection, comments} = useSelector(state => state.collectionViewReducer)
  const collectionId = router.match.params.id

  useEffect(() => {
    dispatch(getCollectionViewAction({collectionId}))
  }, [])

  const sendComment = (commentValue, commentTitle) => {
    const comment = {
      description: commentValue,
      title: commentTitle,
      id: collectionId,
    }
    dispatch(commentUpdateAction(comment))
  }

  if(!collection) {
    return (
      <h1>LOADING</h1>
    )
  }


  return(
    <div className='Collection-view'>
      <CollectionViewTemplate comments={comments} collection={collection} sendComment={sendComment}/>
    </div>
  )
}

export default CollectionView


