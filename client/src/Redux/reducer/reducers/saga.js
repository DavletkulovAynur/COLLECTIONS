import {takeEvery, put, call} from 'redux-saga/effects'
import {
  GET_ALL_COLLECTION,
  GET_MY_COLLECTION,
  WRITE_DOWN_ALL_COLLECTION,
  WRITE_DOWN_COLLECTION,
} from '../../types'
import {appHideLoading} from '../../actions/action'

export function* sagaWatcher() {
  yield takeEvery(GET_ALL_COLLECTION, saga)
  yield takeEvery(GET_MY_COLLECTION, sagaCollection)
}

function* saga() {
  try {
    const payload = yield call(() => fetchRequest('http://localhost:5000/collection/get-all'))
    yield put({ type: WRITE_DOWN_ALL_COLLECTION, payload })
    yield put(appHideLoading())
  } catch (e) {
    
  }
}

function* sagaCollection() {
  try {
    const payload = yield call(() => fetchRequest('http://localhost:5000/collection/get'))
    yield put({type: WRITE_DOWN_COLLECTION, payload})
  } catch (e) {
    console.log(e)
  }
}

async function fetchRequest(url) {
  const data = await fetch(url)
  return await data.json()
}

