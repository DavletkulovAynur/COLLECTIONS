import {takeEvery, fork} from 'redux-saga/effects'
import {
  ADD_BOOKMARK,
  ADD_COLLECTION, DELETE_BOOKMARK,
  GET_ALL_COLLECTION,
  GET_BOOKMARK_COLLECTION, GET_COLLECTION_VIEW,
  GET_MY_COLLECTION, GET_SUBSCRIBE_COLLECTION, GET_USER,


   SEARCH_COLLECTION,
    SUBSCRIBE_ON_USER,
    UNSUBSCRIBE_ON_USER,
} from '../types'

import {
  addCollection,
  getAllCollection,
  getOwnerUserCollection,
  getSubscribeCollection,
} from './components/sagaCollection'
import {authWatcher} from "./components/sagaAuth";
import {commentWatcher} from "./components/sagaComment";
import {userEditWatcher} from "./components/sagaUserArea";

import {getCollectionView} from './components/sagaCollectionView'
import {getUser, subscribeOnUser, unSubscribeOnUser} from './components/sagaUserArea'



import {searchCollection} from './components/sagaSearch'
import {addBookmark, deleteBookmark, getBookmarkCollection} from './components/sagaBookmark'


export function* sagaWatcher() {
  yield fork(authWatcher)
  yield fork(commentWatcher)
  yield fork(userEditWatcher)
  yield takeEvery(GET_ALL_COLLECTION, getAllCollection)
  yield takeEvery(GET_MY_COLLECTION, getOwnerUserCollection)
  yield takeEvery(ADD_COLLECTION, addCollection)
  yield takeEvery(GET_BOOKMARK_COLLECTION, getBookmarkCollection)
  yield takeEvery(DELETE_BOOKMARK, deleteBookmark)
  yield takeEvery(GET_COLLECTION_VIEW, getCollectionView)
  yield takeEvery(GET_USER, getUser)
  yield takeEvery(SEARCH_COLLECTION, searchCollection)
  yield takeEvery(SUBSCRIBE_ON_USER, subscribeOnUser)
  yield takeEvery(GET_SUBSCRIBE_COLLECTION, getSubscribeCollection)
  yield takeEvery(UNSUBSCRIBE_ON_USER, unSubscribeOnUser)
  yield takeEvery(ADD_BOOKMARK, addBookmark)
}




