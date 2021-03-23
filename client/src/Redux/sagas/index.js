import {takeEvery} from 'redux-saga/effects'
import {
    ADD_BOOKMARK,
    ADD_COLLECTION, DELETE_BOOKMARK,
    GET_ALL_COLLECTION,
    GET_ALL_USERS, GET_BOOKMARK_COLLECTION,
    GET_MY_COLLECTION, REGISTRATION,
    SAGA_AUTH_TOKEN, SAGA_LOGIN,
} from '../types'
import {addCollection, getAllCollection, getOwnerUserCollection} from './sagaCollection'

import {auth, login, registration} from './sagaAuth'
import {addBookmark, deleteBookmark, getBookmarkCollection} from "./sagaBookmark";


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
}


