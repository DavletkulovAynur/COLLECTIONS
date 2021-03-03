import {takeEvery} from 'redux-saga/effects'
import {
	GET_ALL_COLLECTION,
	GET_ALL_USERS,
	GET_MY_COLLECTION,
	SAGA_AUTH_TOKEN,
} from '../types'
import {getAllCollection, getOwnerUserCollection} from './sagaCollection'
import {sagaGetAllUsers} from './sagaUsers'
import {auth} from './sagaAuth'


export function* sagaWatcher() {
	yield takeEvery(GET_ALL_COLLECTION, getAllCollection)
	yield takeEvery(GET_MY_COLLECTION, getOwnerUserCollection)
	yield takeEvery(GET_ALL_USERS, sagaGetAllUsers)
	yield takeEvery(SAGA_AUTH_TOKEN, auth)
}


