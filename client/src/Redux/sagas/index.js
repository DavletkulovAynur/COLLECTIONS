import {takeEvery} from 'redux-saga/effects'
import {
    ADD_COLLECTION,
    GET_ALL_COLLECTION,
    GET_ALL_USERS, GET_BOOKMARK_COLLECTION,
    GET_MY_COLLECTION,
    SAGA_AUTH_TOKEN, SAGA_LOGIN,
} from '../types'
import {addCollection, getAllCollection, getOwnerUserCollection, getBookmarkCollection} from './sagaCollection'
import {sagaGetAllUsers} from './sagaUsers'
import {auth, login} from './sagaAuth'


export function* sagaWatcher() {
	yield takeEvery(GET_ALL_COLLECTION, getAllCollection)
	yield takeEvery(GET_MY_COLLECTION, getOwnerUserCollection)
	yield takeEvery(GET_ALL_USERS, sagaGetAllUsers)
	yield takeEvery(SAGA_AUTH_TOKEN, auth)
    yield takeEvery(SAGA_LOGIN, login)
    yield takeEvery(ADD_COLLECTION, addCollection)
    yield takeEvery(GET_BOOKMARK_COLLECTION, getBookmarkCollection)
}


