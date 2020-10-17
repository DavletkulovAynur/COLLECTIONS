import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'Common/utils/hooks/useRouter.hook'

import Fetcher from '../../../Common/utils/fetch'
import {CollectionViewTemplate} from './Components/CollectionViewTemplate'
import {appAlertHidden, appAlertShow} from '../../../Redux/actions/action'
import './CollectionView.scss'

function CollectionView(props) {
  const dispatch = useDispatch()
  const router = useRouter()
  const {allCollection} = useSelector(state => state.collectionReducer)
  const [certainCollection, setCertainCollection] = useState(null)
  const routerId = router.match.params.id

  const commentUpdateApp = async (comment) => {
    try {
       const data = await Fetcher('http://localhost:5000/collection/comment-update', 'PUT', comment)
        updateComment(data, comment)
    } catch (e) {
      console.log(e)
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

  const updateComment =  (data, comment) => {
    if(data.status) {
      console.log('update')
      dispatch(appAlertShow())
      setTimeout(() => {
        dispatch(appAlertHidden())
      }, 2000)
      // 1) вариант update данных локально
      const newArraw = certainCollection.comments.slice()
      newArraw.unshift(comment.comments)
      setCertainCollection({...certainCollection, comments: newArraw})
      // 2) запрос данных с сервера
      // const game = {
      //   id: routerId
      // }
      // const gameId = await Fetcher('http://localhost:5000/game/get/id', 'POST', game)
    }
  }

  const handleSubmit = (commentValue) => {
    const data = {
      comments: commentValue,
      id: routerId
    }
    commentUpdateApp(data)
  }


  if(!certainCollection) {
    return (
      <h1>LOADING</h1>
    )
  }

  return(
    <div className='article-view'>
      <CollectionViewTemplate certainCollection={certainCollection} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default CollectionView


