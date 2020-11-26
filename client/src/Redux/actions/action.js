import {
  APP_ALERT_HIDDEN,
  APP_ALERT_SHOW,
  APP_HIDE_LOADING,
  APP_LOADING,

  GET_ALL_COLLECTION, GET_ALL_USERS,
  GET_MY_COLLECTION
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

//USERS
export function getAllUsers() {
  return({
    type: GET_ALL_USERS
  })
}

//COLLECTION
export function getAllCollection() {
  return({
    type: GET_ALL_COLLECTION
  })
}


export function getMyCollection(payload) {
  console.log('payload', payload)
  return({
    type: GET_MY_COLLECTION,
    payload
  })
}
