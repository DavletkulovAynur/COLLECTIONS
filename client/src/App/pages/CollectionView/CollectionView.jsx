import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'Common/utils/hooks/useRouter.hook'

import {addCommentAction, getCollectionViewAction, removeCommentAction} from '../../../Store/actions/action'

import {CollectionViewTemplate} from "./CollectionViewTemplate";



function CollectionView() {
  const dispatch = useDispatch()
  const router = useRouter()
  const {collection = [], comments} = useSelector(state => state.collectionViewReducer)

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

    dispatch(addCommentAction(comment))
  }

  const removeComment = (commentId) => {
    const comment = {
      collectionId,
      commentId: commentId
    }

    dispatch(removeCommentAction(comment))
  }

  if(!collection) {
    return (
      <h1>LOADING</h1>
    )
  }


  return(
      <CollectionViewTemplate removeComment={removeComment}
                              comments={comments}
                              collection={collection}
                              sendComment={sendComment}/>
  )
}

export default CollectionView


