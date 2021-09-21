import {takeEvery, fork} from 'redux-saga/effects'
import {
  GET_ALL_COLLECTION,
  GET_COLLECTION_VIEW,
  GET_MY_COLLECTION,
  GET_SUBSCRIBE_COLLECTION, GET_USER,


   SEARCH_COLLECTION,
    SUBSCRIBE_ON_USER,
    UNSUBSCRIBE_ON_USER,
} from '../types'

import {
  getAllCollection,
  getOwnerUserCollection,
  getSubscribeCollection,
} from './components/sagaCollection'
import {authWatcher} from "./components/sagaAuth";
import {commentWatcher} from "./components/sagaComment";
import {userEditWatcher} from "./components/sagaEditUser";
import {bookmarkWatcher} from './components/sagaBookmark';
import {addNewCollectionWatcher} from "./components/sagaAddNewCollection";

import {getCollectionView} from './components/sagaCollectionView'
import {getUser, subscribeOnUser, unSubscribeOnUser} from './components/sagaUserArea'



import {searchCollection} from './components/sagaSearch'



export function* rootSaga() {
  yield fork(authWatcher)
  yield fork(commentWatcher)
  yield fork(userEditWatcher)
  yield fork(bookmarkWatcher)
  yield fork(addNewCollectionWatcher)

  yield takeEvery(GET_ALL_COLLECTION, getAllCollection)
  yield takeEvery(GET_MY_COLLECTION, getOwnerUserCollection)
  yield takeEvery(GET_COLLECTION_VIEW, getCollectionView)
  yield takeEvery(GET_USER, getUser)
  yield takeEvery(SEARCH_COLLECTION, searchCollection)
  yield takeEvery(SUBSCRIBE_ON_USER, subscribeOnUser)
  yield takeEvery(GET_SUBSCRIBE_COLLECTION, getSubscribeCollection)
  yield takeEvery(UNSUBSCRIBE_ON_USER, unSubscribeOnUser)

}




