import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'Common/utils/hooks/useRouter.hook'

import {addCommentAction, getCollectionViewAction, removeCommentAction} from '../../../Store/actions/action'

import {CollectionViewTemplate} from "./CollectionViewTemplate";
import { getCommentsAction } from 'Store/reducers/components/collectionViewReducer';
import { Loading } from 'Common/components/Loading/Loading';



function CollectionView() {
  const dispatch = useDispatch()
  const router = useRouter()
  const {collection, comments, getCollectionLoading} = useSelector(state => state.collectionViewReducer)
  const {_id} = collection

  const collectionId = router.match.params.id



  useEffect(() => {
	
    dispatch(getCollectionViewAction({collectionId}))
    dispatch(getCommentsAction({collectionId}))
  }, [])

  const sendComment = ({title, description}) => {
    const comment = {
      title,
      description,
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


  if(getCollectionLoading || _id !== collectionId) {
    return (
      <Loading/>
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


