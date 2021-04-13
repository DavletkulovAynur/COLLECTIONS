import {takeEvery} from 'redux-saga/effects'
import {
    ADD_BOOKMARK,
    ADD_COLLECTION, COMMENT_UPDATE, DELETE_BOOKMARK, EDIT_USER,
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
    searchCollection
} from './sagaCollection'
import {auth, login, registration} from './sagaAuth'
import {addBookmark, deleteBookmark, getBookmarkCollection} from './sagaBookmark'
import {commentUpdate, getCollectionView} from './sagaCollectionView'
import {editUser, getUser, subscribeOnUser, unSubscribeOnUser} from './sagaUserArea'


export function* sagaWatcher() {
	yield takeEvery(GET_ALL_COLLECTION, getAllCollection)
	yield takeEvery(GET_MY_COLLECTION, getOwnerUserCollection)
	yield takeEvery(SAGA_AUTH_TOKEN, auth)
    yield takeEvery(REGISTRATION, registration)
    yield takeEvery(SAGA_LOGIN, login)
    yield takeEvery(ADD_COLLECTION, addCollection)
    yield takeEvery(GET_BOOKMARK_COLLECTION, getBookmarkCollection)
    yield takeEvery(DELETE_BOOKMARK, deleteBookmark)
    yield takeEvery(ADD_BOOKMARK, addBookmark)
    yield takeEvery(COMMENT_UPDATE, commentUpdate)
    yield takeEvery(GET_COLLECTION_VIEW, getCollectionView)
    yield takeEvery(GET_USER, getUser)
    yield takeEvery(SEARCH_COLLECTION, searchCollection)
    yield takeEvery(SUBSCRIBE_ON_USER, subscribeOnUser)
    yield takeEvery(GET_SUBSCRIBE_COLLECTION, getSubscribeCollection)
    yield takeEvery(UNSUBSCRIBE_ON_USER, unSubscribeOnUser)
    yield takeEvery(EDIT_USER, editUser)
}


