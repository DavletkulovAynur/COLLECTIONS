import {call, put} from 'redux-saga/effects'
import {
	WRITE_REDUCER_TOKEN,
	LOGIN_AUTHENTICATION,
	LOGOUT,
	CHECK_REGISTRATION,
	CHECK_REGISTRATION_RETURN_FALSE, SHOW_MESSAGE, REMOVE_SHOW_MESSAGE
} from '../types'
import Fetcher from '../../Common/utils/fetch'

export function* login(user) {
	try {
		yield put({type: CHECK_REGISTRATION})
		const payload = yield call(() => Fetcher('http://localhost:5000/auth/login',
											'POST',
											user.payload,))

		yield put({type: LOGIN_AUTHENTICATION, payload})

		yield put({type: CHECK_REGISTRATION_RETURN_FALSE})
	} catch (e) {
		const payload = {text: `ошибка ${e.statusText}`, severity: 'error'}
		yield put({type: SHOW_MESSAGE, payload})
		yield put({type: CHECK_REGISTRATION_RETURN_FALSE})
		console.log('error', e)
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
			console.log('Error auth loading', e)
		}
	}

	export function* registration({user}) {
		try {
			const payload = yield call(() => Fetcher('http://localhost:5000/auth/register', 'POST', user))

		} catch (e) {
			console.log(e)
		}
	}

