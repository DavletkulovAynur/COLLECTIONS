import {call, put} from 'redux-saga/effects'
import {WRITE_REDUCER_TOKEN, LOGIN_AUTHENTICATION, LOGOUT} from '../types'
import Fetcher from '../../Common/utils/fetch'
import {ShowMessage} from "../../Common/components/ShowMessage/ShowMessage";


export function* login(user) {
	try {
		const payload = yield call(() => Fetcher('http://localhost:5000/auth/login',
											'POST',
											user.payload,))

		yield put({type: LOGIN_AUTHENTICATION, payload})
	} catch (e) {
		console.log(e)
	}
}

export function* auth() {
	try {

		const payload = yield call(() => Fetcher('http://localhost:5000/auth/testAuth', 'GET', '', {
			Authorization:`Bearer ${localStorage.getItem('token')}`
		}))
		console.log('получаем данные', payload)

		yield put({type: WRITE_REDUCER_TOKEN, payload})



	} catch (e) {
		yield put({type: LOGOUT})
		console.log('Error auth loading', e)
	}
}

export function* registration({payload}) {
	try {
		console.log(payload)
		const data = yield call(() => Fetcher('http://localhost:5000/auth/register', 'POST', payload))

		console.log(data)
		// if(data.status.ok) {
		// 	console.log('super')
		// 	ShowMessage(true)
		// }
	} catch (e) {
		console.log(e)
	}
}

