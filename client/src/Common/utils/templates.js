import React, {} from 'react'
import {getGames} from "../../Redux/actions/action"

// запрашиваем данные(comment) с сервера
export function getArticle(dispatch) {
  dispatch(getGames())
}
