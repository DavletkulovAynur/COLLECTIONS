import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "Common/utils/hooks/useRouter.hook";
import './ArticleView.scss'
import Fetcher from "../../../Common/utils/fetch";
import {ArticleViewTemplate} from "./Components/ArticleViewTemplate";
import {appAlertHidden, appAlertShow} from "../../../Redux/actions/action";

function ArticleView(props) {
  const dispatch = useDispatch()
  const router = useRouter()
  const {allCollection} = useSelector(state => state.collectionReducer)
  const [game, setGame] = useState(null)
  const routerId = router.match.params.id

  const commentUpdateApp = async (comment) => {
    try {
       const data = await Fetcher('http://localhost:5000/game/update', 'PUT', comment)
        updateArticle(data, comment)
    } catch (e) {
      console.log(e)
    }
  }

  const filterGames = (games) => {
    return games.filter(game => game._id === routerId)
  }

  useEffect( () => {
    if(allCollection.length > 0) {
      const data = filterGames(allCollection)
      setGame(data[0])
    }
  }, [allCollection])

  const updateArticle =  (data, comment) => {
    if(data.status) {
      dispatch(appAlertShow())
      setTimeout(() => {
        dispatch(appAlertHidden())
      }, 2000)
      // 1) вариант update данных локально
      const newArraw = game.comments.slice()
      newArraw.unshift(comment.comments)
      setGame({...game, comments: newArraw})
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


  if(!game) {
    return (
      <h1>LOADING</h1>
    )
  }

  return(
    <div className='article-view'>
      <ArticleViewTemplate game={game} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default ArticleView


