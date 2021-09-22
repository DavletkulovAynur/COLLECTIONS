import {put, call, takeEvery} from 'redux-saga/effects'
import {
	GET_ALL_COLLECTION, GET_COLLECTION_VIEW, GET_MY_COLLECTION, GET_SUBSCRIBE_COLLECTION, GET_USER,
	WRITE_DOWN_ALL_COLLECTION,
	WRITE_DOWN_COLLECTION, WRITE_DOWN_COLLECTION_VIEW, WRITE_DOWN_GET_USER,
	WRITE_DOWN_SUBSCRIBE_COLLECTION,
} from '../../types'
import {appError, appHideLoading} from '../../actions/action'
import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'

// перенести (передеелать)
function addMarkupClassToCards(dataArr) {
	const className = () => {
		const classNames = ['small', 'medium', 'large']
		return classNames[Math.floor(Math.random()*classNames.length)]
	}

	return dataArr.map((item) => {
		return {...item, classTest: className()}
	})
}

function* getAllCollection() {
	try {
		const allCollection = yield call(() => Fetcher('http://localhost:5000/collection/get-all', 'GET'))
		const payload = addMarkupClassToCards(allCollection.data)

		yield put({ type: WRITE_DOWN_ALL_COLLECTION, payload })
		yield put(appHideLoading())
	} catch (e) {
		console.log('error', e)
		yield put(appError())
	}
}

function* getOwnerUserCollection(data) {
	try {
		const user = {
			userId: data.payload
		}
		const userCollection = yield call(() => Fetcher('http://localhost:5000/collection/get', 'POST', user))
		const payload = addMarkupClassToCards(userCollection.data)
		yield put({type: WRITE_DOWN_COLLECTION, payload})
		yield put(appHideLoading())
	} catch (e) {
		console.log(e)
		yield put(appError())
	}
}

function* getSubscribeCollection(data) {
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

function* getCollectionView(data) {
	try {
		const payload = yield call(() => Fetcher(`${API_URL}collection/get-collection-view`,
			'POST',
			data.payload,
			{Authorization: `Bearer ${localStorage.getItem('token')}`}))
		yield put({type: WRITE_DOWN_COLLECTION_VIEW, payload})
	} catch (e){
		console.log(e)
	}
}

function* getUser(data) {
	try {
		const user = {
			userId: data.payload
		}
		const payload = yield call(() => Fetcher(`${API_URL}users/get-user`, 'POST', user))

		yield put({type: WRITE_DOWN_GET_USER, payload})
	} catch (e) {
		console.log('error', e)
	}
}

export function* getCollectionDataWatcher() {
	yield takeEvery(GET_ALL_COLLECTION, getAllCollection)
	yield takeEvery(GET_MY_COLLECTION, getOwnerUserCollection)
	yield takeEvery(GET_COLLECTION_VIEW, getCollectionView)
	yield takeEvery(GET_USER, getUser)
	yield takeEvery(GET_SUBSCRIBE_COLLECTION, getSubscribeCollection)
}

