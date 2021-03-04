import {call, put} from 'redux-saga/effects'
import {WRITE_REDUCER_TOKEN, LOGIN_AUTHENTICATION} from '../types'


export function* login(user) {
	try {
	  console.log(user)
		const payload = yield call(() => fetchRequest('http://localhost:5000/auth/login', user.payload))
		// localStorage.setItem('token', payload.token)
		yield put({type: LOGIN_AUTHENTICATION, payload})
	} catch (e) {
		console.log(e)
	}
}

export function* auth() {
	try {
		const payload = yield call(() => fetchTest('http://localhost:5000/auth/testAuth'))
		console.log('получаем данные', payload)
		yield put({type: WRITE_REDUCER_TOKEN, payload})

	} catch (e) {
		console.log(e)
	}
}


async function fetchTest(url) {
	const data = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization:`Bearer ${localStorage.getItem('token')}`
		},
	})
	return await data.json()
}

async function fetchRequest(url, user) {
	const data = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	return await data.json()
}
