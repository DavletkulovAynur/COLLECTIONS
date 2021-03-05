import {put, call} from 'redux-saga/effects'
import {WRITE_DOWN_ALL_COLLECTION, WRITE_DOWN_COLLECTION} from '../types'
import {appError, appHideLoading} from '../actions/action'
import Fetcher from '../../Common/utils/fetch'

export function* getAllCollection() {
	try {
		const payload = yield call(() => fetchRequest('http://localhost:5000/collection/get-all'))
		yield put({ type: WRITE_DOWN_ALL_COLLECTION, payload })
		yield put(appHideLoading())
	} catch (e) {
		console.log('error', e)
		yield put(appError())
	}
}

export function* getOwnerUserCollection(data) {
	const user = {
		userId: data.payload
	}
	try {
		const payload = yield call(() => Fetcher('http://localhost:5000/collection/get', 'POST', user))
		yield put({type: WRITE_DOWN_COLLECTION, payload})
		yield put(appHideLoading())
	} catch (e) {
		console.log(e)
		yield put(appError())
	}
}

async function fetchRequest(url) {
	const data = await fetch(url)
	return await data.json()
}

// payload ???
export function* addCollection(formData) {
  try {
    console.log('formData.payload', ...formData.payload)

    yield call(() => fetch('http://localhost:5000/collection/add', {
      method: 'POST',
      body: formData.payload,
      headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }))

  } catch (e) {
    console.log(e)
  }
}
