import {
  APP_ALERT_HIDDEN,
  APP_ALERT_SHOW, APP_ERROR,
  APP_HIDE_LOADING,
  APP_LOADING,

  GET_ALL_COLLECTION, GET_ALL_USERS,
  GET_MY_COLLECTION
} from '../types'

//COLLECTION
export function getAllCollection() {
  return({
    type: GET_ALL_COLLECTION
  })
}


export function getMyCollection(payload) {
  return({
    type: GET_MY_COLLECTION,
    payload
  })
}

// APP
export function appLoading() {
  return({
    type: APP_LOADING
  })
}

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

export function appHideLoading() {
  return({
    type: APP_HIDE_LOADING
  })
}

export function appError() {
  return({
    type: APP_ERROR
  })
}
//

//USERS
export function getAllUsers() {
  return({
    type: GET_ALL_USERS
  })
}

// Auth
export function loginAuth(payload) {
  return({
    type: 'LOGIN_AUTH',
    payload
  })
}

export function checkToken() {
    return({
      type: 'CHECK_AUTH'
    })
}

// создать Класс


