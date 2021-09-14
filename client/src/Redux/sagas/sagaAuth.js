import {call, put} from 'redux-saga/effects'
import {
	WRITE_REDUCER_TOKEN,
	LOGIN_AUTHENTICATION,
	LOGOUT,
	CHECK_REGISTRATION,
	CHECK_REGISTRATION_RETURN_FALSE, SHOW_MESSAGE,
} from '../types'
import Fetcher from '../../Common/utils/fetch'
import {API_URL} from "../../config";

export function* login(user) {
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

	export function* auth() {
		try {
			const payload = yield call(() => Fetcher('http://localhost:5000/auth/auth', 'GET', '', {
				Authorization:`Bearer ${localStorage.getItem('token')}`
			}))
			yield put({type: WRITE_REDUCER_TOKEN, payload})
		} catch (e) {
			yield put({type: LOGOUT})
			// console.log('Error auth loading', e)
		}
	}

	// error
	export function* registration(data) {
		try {
			const payload = yield call(() => Fetcher(`${API_URL}auth/register`, 'POST', data.payload))
			yield put({type: LOGIN_AUTHENTICATION, payload})
		} catch (e) {
			const payload = {text: `${e.message}`, severity: 'error'}
			yield put({type: SHOW_MESSAGE, payload})
		}
	}

