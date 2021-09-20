import {takeEvery} from 'redux-saga/effects'
import {
  ADD_BOOKMARK,
  ADD_COLLECTION, COMMENT_REMOVE, COMMENT_UPDATE, DELETE_BOOKMARK, EDIT_AVATAR, EDIT_USER,
  GET_ALL_COLLECTION,
  GET_BOOKMARK_COLLECTION, GET_COLLECTION_VIEW,
  GET_MY_COLLECTION, GET_SUBSCRIBE_COLLECTION, GET_USER, REGISTRATION,
  SAGA_AUTH_TOKEN, SAGA_LOGIN, SEARCH_COLLECTION, SUBSCRIBE_ON_USER, UNSUBSCRIBE_ON_USER,
} from '../types'

import {
  addCollection,
  getAllCollection,
  getOwnerUserCollection,
  getSubscribeCollection,
} from './components/sagaCollection'
import {auth, login, registration} from './components/sagaAuth'

import {getCollectionView} from './components/sagaCollectionView'
import {editAvatar, editUser, getUser, subscribeOnUser, unSubscribeOnUser} from './components/sagaUserArea'
import {addComment, removeComment} from './components/commentSaga'

import {searchCollection} from './components/sagaSearch'
import {addBookmark, deleteBookmark, getBookmarkCollection} from './components/sagaBookmark'


export function* sagaWatcher() {
  yield takeEvery(GET_ALL_COLLECTION, getAllCollection)
  yield takeEvery(GET_MY_COLLECTION, getOwnerUserCollection)
  yield takeEvery(SAGA_AUTH_TOKEN, auth)
  yield takeEvery(REGISTRATION, registration)
  yield takeEvery(SAGA_LOGIN, login)
  yield takeEvery(ADD_COLLECTION, addCollection)
  yield takeEvery(GET_BOOKMARK_COLLECTION, getBookmarkCollection)
  yield takeEvery(DELETE_BOOKMARK, deleteBookmark)
  yield takeEvery(GET_COLLECTION_VIEW, getCollectionView)
  yield takeEvery(GET_USER, getUser)
  yield takeEvery(SEARCH_COLLECTION, searchCollection)
  yield takeEvery(SUBSCRIBE_ON_USER, subscribeOnUser)
  yield takeEvery(GET_SUBSCRIBE_COLLECTION, getSubscribeCollection)
  yield takeEvery(UNSUBSCRIBE_ON_USER, unSubscribeOnUser)
  yield takeEvery(EDIT_USER, editUser)
  yield takeEvery(EDIT_AVATAR, editAvatar)
  yield takeEvery(COMMENT_UPDATE, addComment)
  yield takeEvery(COMMENT_REMOVE, removeComment)
  yield takeEvery(ADD_BOOKMARK, addBookmark)
}


