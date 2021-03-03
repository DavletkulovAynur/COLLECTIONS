import {takeEvery} from 'redux-saga/effects'
import {GET_ALL_COLLECTION,
		GET_ALL_USERS,
		GET_MY_COLLECTION,} from '../types'
import {getAllCollection, getOwnerUserCollection} from './sagaCollection'
import {sagaGetAllUsers} from './sagaUsers'


export function* sagaWatcher() {
	yield takeEvery(GET_ALL_COLLECTION, getAllCollection)
	yield takeEvery(GET_MY_COLLECTION, getOwnerUserCollection)
	yield takeEvery(GET_ALL_USERS, sagaGetAllUsers)
}


