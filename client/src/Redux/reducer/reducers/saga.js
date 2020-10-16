import {takeEvery, put, call} from 'redux-saga/effects'
import {GET_GAMES,
        GET_MY_COLLECTION,
        WRITE_DOWN_COLLECTION,
        WRITE_DOWN_GAMES} from '../../types'
import {appHideLoading} from '../../actions/action'

export function* sagaWatcher() {
  yield takeEvery(GET_GAMES, saga)
  yield takeEvery(GET_MY_COLLECTION, sagaCollection)
}

function* saga() {
  try {
   const payload = yield call(fetchPosts)
    yield put({ type: WRITE_DOWN_GAMES, payload })
    yield put(appHideLoading())
  } catch (e) {
    
  }
}

function* sagaCollection() {
  try {
    const payload = yield call(fetchCollection)
    yield put({type: WRITE_DOWN_COLLECTION, payload})
  } catch (e) {
    console.log(e)
  }
}

async function fetchCollection() {
  const response = await fetch('http://localhost:5000/collection/get')
  console.log('response', response)
  return await response.json()
}

async function fetchPosts() {
  const response = await fetch('http://localhost:5000/game/get')
  return await response.json()
}
