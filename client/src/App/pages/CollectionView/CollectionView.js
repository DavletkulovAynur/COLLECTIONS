import React, {useCallback, useContext, useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'Common/utils/hooks/useRouter.hook'

import Fetcher from '../../../Common/utils/fetch'
import {CollectionViewTemplate} from './Components/CollectionViewTemplate'
import './CollectionView.scss'
import {AuthContext} from "App/context/AuthContext";

function CollectionView(props) {
  const auth = useContext(AuthContext)
  const router = useRouter()
  const {allCollection} = useSelector(state => state.collectionReducer)
  const [certainCollection, setCertainCollection] = useState(null)
  const routerId = router.match.params.id

  const [commentLoader, setCommentLoader] = useState(false)

  const commentUpdateApp = async (comment) => {
    try {
        setCommentLoader(true)
        const data = await Fetcher('http://localhost:5000/collection/comment-update', 'PUT', comment)
        updateComment(data)
    } catch (e) {
      console.log(e)
    }
  }

  const updateComment =  (data) => {
    const newComment = data.commentObj
    if(data.status) {
      setCommentLoader(false)
      setCertainCollection({...certainCollection, comments: [...certainCollection.comments, newComment]})
    }
  }

  const filterCollections = (allCollection) => {
    return allCollection.filter(collection => collection._id === routerId)
  }

  useEffect( () => {
    if(allCollection.length > 0) {
      const data = filterCollections(allCollection)
      setCertainCollection(data[0])
    }
  }, [allCollection])



  const handleSubmit = (commentValue, commentTitle) => {
    console.log(auth.userName)
    const comment = {
      description: commentValue,
      title: commentTitle,
      id: routerId,
      author: auth.userName
    }
    commentUpdateApp(comment)
  }


  if(!certainCollection) {
    return (
      <h1>LOADING</h1>
    )
  }

  return(
    <div className='article-view'>
      <CollectionViewTemplate commentLoader={commentLoader} certainCollection={certainCollection} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default CollectionView


