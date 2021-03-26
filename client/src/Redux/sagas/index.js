import {takeEvery} from 'redux-saga/effects'
import {
    ADD_BOOKMARK,
    ADD_COLLECTION, COMMENT_UPDATE, DELETE_BOOKMARK,
    GET_ALL_COLLECTION,
    GET_ALL_USERS, GET_BOOKMARK_COLLECTION, GET_COLLECTION_VIEW,
    GET_MY_COLLECTION, GET_USER, REGISTRATION,
    SAGA_AUTH_TOKEN, SAGA_LOGIN, SEARCH_COLLECTION,
} from '../types'

import {addCollection, getAllCollection, getOwnerUserCollection, searchCollection} from './sagaCollection'
import {auth, login, registration} from './sagaAuth'
import {addBookmark, deleteBookmark, getBookmarkCollection} from './sagaBookmark'
import {commentUpdate, getCollectionView} from './sagaCollectionView'
import {getUser} from './sagaUserArea'


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
}


