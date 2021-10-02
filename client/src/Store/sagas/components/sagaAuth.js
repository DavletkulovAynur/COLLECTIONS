import {call, put, takeEvery} from 'redux-saga/effects'
import {
	WRITE_REDUCER_TOKEN,
	LOGIN_AUTHENTICATION,
	LOGOUT,
	CHECK_REGISTRATION,
	CHECK_REGISTRATION_RETURN_FALSE, SHOW_MESSAGE, GET_ALL_COLLECTION, SAGA_AUTH_TOKEN, REGISTRATION, SAGA_LOGIN,
} from '../../types'
import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'


function* loginWorker(user) {
	try {
		yield put({type: CHECK_REGISTRATION})
		const payload = yield call(() => Fetcher('http://localhost:5000/auth/login',
											'POST',
											user.payload,))

		yield put({type: LOGIN_AUTHENTICATION, payload})
		yield put({type: CHECK_REGISTRATION_RETURN_FALSE})
	} catch (e) {
		const payload = {text: `${e.message}`, severity: 'error'}
		yield put({type: SHOW_MESSAGE, payload})
		yield put({type: CHECK_REGISTRATION_RETURN_FALSE})
	}
}

function* registrationWorker(data) {
	try {
		const payload = yield call(() => Fetcher(`${API_URL}auth/register`, 'POST', data.payload))
		yield put({type: LOGIN_AUTHENTICATION, payload})
	} catch (e) {
		const payload = {text: `${e.message}`, severity: 'error'}
		yield put({type: SHOW_MESSAGE, payload})
	}
}

function* authWorker() {
	try {
		const payload = yield call(() => Fetcher('http://localhost:5000/auth/auth', 'GET', '', {
			Authorization:`Bearer ${localStorage.getItem('token')}`
		}))
		yield put({type: WRITE_REDUCER_TOKEN, payload})
	} catch (e) {
		yield put({type: LOGOUT})
	}
}

export function* authWatcher() {
	yield takeEvery(SAGA_AUTH_TOKEN, authWorker)
	yield takeEvery(REGISTRATION, registrationWorker)
	yield takeEvery(SAGA_LOGIN, loginWorker)
}
