import {call, put} from 'redux-saga/effects'
import {WRITE_DOWN_ALL_USERS} from '../types'

export function* sagaGetAllUsers() {
	try {
		const payload = yield call(() => fetchRequest('http://localhost:5000/users/get'))
		yield put({type: WRITE_DOWN_ALL_USERS, payload})
	} catch (e) {
		console.log(e)
	}
}




async function fetchRequest(url) {
	const data = await fetch(url)
	return await data.json()
}