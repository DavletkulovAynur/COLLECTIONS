import {call, put} from 'redux-saga/effects'
import {WRITE_REDUCER_TOKEN, LOGIN_AUTHENTICATION, LOGOUT} from '../types'
import Fetcher from '../../Common/utils/fetch'

export function* login(user) {
	try {
		console.log('user:', user)
		const payload = yield call(() => Fetcher('http://localhost:5000/auth/login',
											'POST',
											user.payload,))

		yield put({type: LOGIN_AUTHENTICATION, payload})
		yield put({type: '', payload})
	} catch (e) {
		console.log(e)
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

