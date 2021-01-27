import {takeEvery, put, call} from 'redux-saga/effects'
import {
  GET_ALL_COLLECTION, GET_ALL_USERS,
  GET_MY_COLLECTION,
  WRITE_DOWN_ALL_COLLECTION, WRITE_DOWN_ALL_USERS,
  WRITE_DOWN_COLLECTION,
} from '../../types'
import {appError, appHideLoading} from '../../actions/action'
import Fetcher from '../../../Common/utils/fetch'

export function* sagaWatcher() {
  yield takeEvery(GET_ALL_COLLECTION, sagaAllCollection)
  yield takeEvery(GET_MY_COLLECTION, sagaCollection)
  yield takeEvery(GET_ALL_USERS, sagaUsers)
}

function* sagaAllCollection() {
  try {
    const payload = yield call(() => fetchRequest('http://localhost:5000/collection/get-all'))
    yield put({ type: WRITE_DOWN_ALL_COLLECTION, payload })
    yield put(appHideLoading())
  } catch (e) {
    console.log('error', e)
    yield put(appError())
  }
}

function* sagaCollection(data) {
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

function* sagaUsers() {
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

