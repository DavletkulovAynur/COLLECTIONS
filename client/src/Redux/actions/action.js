import {
  APP_ALERT_HIDDEN,
  APP_ALERT_SHOW,
  APP_HIDE_LOADING,
  APP_LOADING,
  GET_GAMES, USER_NAME
} from '../types'

export function appLoading() {
  return({
    type: APP_LOADING
  })
}

// ALERT

export function appAlertShow() {
  return({
    type: APP_ALERT_SHOW
  })
}

export function appAlertHidden() {
  return({
    type: APP_ALERT_HIDDEN
  })
}

/////

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

export function writeUserName(userName) {
  return({
    type: USER_NAME,
    payload: userName
  })
}
