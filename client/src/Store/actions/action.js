import {
  GET_MY_COLLECTION,
  GET_ALL_COLLECTION,
  ADD_COLLECTION,

  GET_ALL_USERS,

  SAGA_AUTH_TOKEN,
  SAGA_LOGIN,
  LOAD_IMG_DRAG_AND_DROP,
  GET_BOOKMARK_COLLECTION,
  LOGOUT,
  REGISTRATION,
  GET_COLLECTION_VIEW,
  GET_USER,
  SEARCH_COLLECTION,
  SUBSCRIBE_ON_USER,
  GET_SUBSCRIBE_COLLECTION,
  UNSUBSCRIBE_ON_USER,
  REMOVE_SHOW_MESSAGE,
  EDIT_USER,
  EDIT_AVATAR,
} from '../types'

import {addCommentAction, removeCommentAction} from './components/commentActions'
import {bookmarkDeleteAction, addBookmarkAction} from "./components/bookmarkActions";

export {addCommentAction,
        removeCommentAction,
        bookmarkDeleteAction,
        addBookmarkAction,
      }

export function getCollectionViewAction(payload) {
  return({
    type: GET_COLLECTION_VIEW,
    payload
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

//User_Area
export function getUserAction(payload) {
  return({
    type: GET_USER,
    payload
  })
}

//SEARCH
export function searchCollectionAction(payload) {
  return({
    type: SEARCH_COLLECTION,
    payload
  })
}

//Subscribe
export function subscribeOnUserAction(payload) {
  return({
    type: SUBSCRIBE_ON_USER,
    payload
  })
}

export function unSubscribeOnUserAction(payload) {
  return({
    type: UNSUBSCRIBE_ON_USER,
    payload
  })
}

export function getSubscribeCollectionAction(payload) {
  return({
    type: GET_SUBSCRIBE_COLLECTION,
    payload
  })
}

// Show_Message

export function removeShowMessageAction() {
  return({
    type: REMOVE_SHOW_MESSAGE
  })
}

//Edit user
export function editUserAction(payload) {
  return({
    type: EDIT_USER,
    payload
  })
}

export function editAvatarAction(payload) {
  return({
    type: EDIT_AVATAR,
    payload
  })
}