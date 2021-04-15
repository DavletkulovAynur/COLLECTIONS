import {put, call} from 'redux-saga/effects'
import {
	SUCCESSFULLY_SEND_COLLECTION,
	WRITE_DOWN_ALL_COLLECTION,
	WRITE_DOWN_COLLECTION, WRITE_DOWN_SEARCH_COLLECTION, WRITE_DOWN_SUBSCRIBE_COLLECTION
} from '../types'
import {appError, appHideLoading} from '../actions/action'
import Fetcher from '../../Common/utils/fetch'
import {API_URL} from "../../config";

	export function* getAllCollection() {
		try {
			const payload = yield call(() => Fetcher('http://localhost:5000/collection/get-all', 'GET'))
			yield put({ type: WRITE_DOWN_ALL_COLLECTION, payload })
			yield put(appHideLoading())
		} catch (e) {
			console.log('error', e)
			yield put(appError())
		}
	}

	export function* getOwnerUserCollection(data) {
		try {
			const user = {
				userId: data.payload
			}
			const payload = yield call(() => Fetcher('http://localhost:5000/collection/get', 'POST', user))
			yield put({type: WRITE_DOWN_COLLECTION, payload})
			yield put(appHideLoading())
		} catch (e) {
			console.log(e)
			yield put(appError())
		}
	}


	export function* addCollection(formData) {
	  try {
	  	console.log('formData.payload', formData.payload)
	  	const payload = yield call (() => Fetcher(`${API_URL}collection/add`,
			'POST',
			formData.payload,
			{
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			false
			))
	  	yield put({type: SUCCESSFULLY_SEND_COLLECTION, payload})
	  } catch (e) {
		console.log(e)
	  }
	}

	export function* searchCollection(data) {
		try {
			const payload = yield call (() => Fetcher('http://localhost:5000/collection/search', 'POST', data.payload))

			yield put({type: WRITE_DOWN_SEARCH_COLLECTION, payload})
		} catch (e) {
			console.log('error', e)
		}
	}

	export function* getSubscribeCollection(data) {
		try {
			const subscribe = {
				userSubscribe: data.payload
			}
			const payload = yield call(() => Fetcher(`${API_URL}collection//get-subscribe-collection`,
				'POST',
				subscribe,
				{Authorization: `Bearer ${localStorage.getItem('token')}`}
				))
			yield put({type: WRITE_DOWN_SUBSCRIBE_COLLECTION, payload})
		} catch (e) {
			console.log('error', e)
		}
	}