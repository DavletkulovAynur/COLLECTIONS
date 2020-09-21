import {APP_HIDE_LOADING, APP_LOADING, GET_GAMES} from '../types'

export function appLoading() {
  return({
    type: APP_LOADING
  })
}

export function appHideLoading() {
  return({
    type: APP_HIDE_LOADING
  })
}

export function getGames() {
  return({
    type: GET_GAMES
  })
}
