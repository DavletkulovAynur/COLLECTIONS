import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "../../../Common/utils/hooks";
import './ArticleView.scss'
import Fetcher from "../../../Common/utils/fetch";
import {ArticleViewTemplate} from "./Components/ArticleViewTemplate";

function ArticleView(props) {
  const router = useRouter()
  const games = useSelector(state => state.gameReducer)
  const [game, setGame] = useState(null)
  const routerId = router.match.params.id

  const commentUpdateApp = async (comment) => {
    try {
       const data = await Fetcher('http://localhost:5000/game/update', 'PUT', comment)
      console.log('super')
        updateArticle(data, comment)
    } catch (e) {
      console.log('ERROR', e)
    }
  }

  const filterGames = (games) => {
    return games.filter(game => game._id === routerId)
  }

  useEffect( () => {
    if(games.length > 0) {
      const data = filterGames(games)
      setGame(data[0])
    }
  }, [games])

  function ddf() {
    console.log('sss')
  }

  const updateArticle =  (data, comment) => {
    if(data.status) {
      // 1 вариант update данных локально
      const newArraw = game.comments.slice()
      newArraw.push(comment.comments)
      setGame({...game, comments: newArraw})
    }
    // const game = {
      //   id: routerId
      // }
      // const gameId = await Fetcher('http://localhost:5000/game/get/id', 'POST', game)
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


