import {takeEvery, put, call} from 'redux-saga/effects'
import {
  GET_ALL_COLLECTION, GET_ALL_USERS,
  GET_MY_COLLECTION,
  WRITE_DOWN_ALL_USERS,

} from '../types'

import {getAllCollection, getOwnerUserCollection} from './sagaCollection'
import {CHECK_AUTH, LOGIN_AUTH} from '../reducer/reducers/authReducer'
import {auth, login} from './sagaAuth'

export function* sagaWatcher() {
  yield takeEvery(GET_ALL_COLLECTION, getAllCollection)
  yield takeEvery(GET_MY_COLLECTION, getOwnerUserCollection)
  yield takeEvery(GET_ALL_USERS, sagaUsers)
  yield takeEvery(LOGIN_AUTH, login)
  yield takeEvery(CHECK_AUTH, auth)
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

