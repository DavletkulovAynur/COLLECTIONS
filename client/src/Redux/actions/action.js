import {
  APP_ALERT_HIDDEN,
  APP_ALERT_SHOW,
  APP_ERROR,
  APP_HIDE_LOADING,
  APP_LOADING,

  GET_MY_COLLECTION,
  GET_ALL_COLLECTION,
  ADD_COLLECTION,

  GET_ALL_USERS,

  SAGA_AUTH_TOKEN,
  SAGA_LOGIN,
  DISPATCH_COLLECTION,
  LOAD_IMG_DRAG_AND_DROP,
  GET_BOOKMARK_COLLECTION,
  PERSONAL_PAGE_AVATAR_POPUP,
  LOGOUT,
  REGISTRATION,
  DELETE_BOOKMARK,
  ADD_BOOKMARK,
  BOOKMARK_ADD_REMOVE,
  COMMENT_UPDATE,
  GET_COLLECTION_VIEW, GET_USER,
} from '../types'

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

export function getBookmarkCollectionAction(payload){
  return({
    type: GET_BOOKMARK_COLLECTION,
    payload
  })
}


//ADD Collection
export function addCollectionAction(payload) {
  return({
    type: ADD_COLLECTION,
    payload
  })
}

export function dispatchCollection(payload) {
  return({
    type: DISPATCH_COLLECTION,
    payload
  })
}

export function loadImgDragAndDrop(payload) {
  return({
    type: LOAD_IMG_DRAG_AND_DROP,
    payload
  })
}

//auth
export function checkToken() {
  return({
    type: SAGA_AUTH_TOKEN
  })
}

export function loginAction(payload) {
  return({
    type: SAGA_LOGIN,
    payload
  })
}

export function logoutAction() {
  return({
    type: LOGOUT
  })
}

export function registrationAction(payload) {
  return({
    type: REGISTRATION,
    payload
  })
}

//PERSONAL_PAGE
export function openPopupChangeAvatar(payload) {
  return({
    type: PERSONAL_PAGE_AVATAR_POPUP,
    payload
  })
}

//BOOKMARK
export function bookmarkDeleteAction(payload) {
  return({
    type: DELETE_BOOKMARK,
    payload
  })
}

export function addBookmarkAction(payload) {
  return({
    type: ADD_BOOKMARK,
    payload
  })
}

export function addBookmarkRemoveEventShowMessage() {
  return({
    type: BOOKMARK_ADD_REMOVE
  })
}

//Collection View
export function commentUpdateAction(payload) {
  return({
    type: COMMENT_UPDATE,
    payload
  })
}

export function getCollectionViewAction(payload) {
  return({
    type: GET_COLLECTION_VIEW,
    payload
  })
}

//User_Area
export function getUserAction(payload) {
  return({
    type: GET_USER,
    payload
  })
}
