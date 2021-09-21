import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'
import {put, call, takeEvery} from 'redux-saga/effects'
import {EDIT_AVATAR, EDIT_USER, LOAD_AVATAR, LOAD_AVATAR_COMPLETE, SHOW_MESSAGE, WRITE_DOWN_GET_USER} from '../../types'

export function* getUser(data) {
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

export function* subscribeOnUser(data) {
  try {
    const user = {
      subscribeUserId: data.payload
    }
    const payload = yield call(() => Fetcher(
      `${API_URL}users/subscribe-on-user`,
      'POST',
      user,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}
    ))

  } catch (e) {
    console.log('error', e)
  }
}

export function* unSubscribeOnUser(data) {
  try {
    const user = {
      subscribeUserId: data.payload
    }

    const payload = yield call(() => Fetcher(
      `${API_URL}users/unsubscribe-on-user`,
      'POST',
      user,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}
    ))
  } catch (e) {
    console.log('error', e)
  }
}

export function* editUser(data) {
  try {
    const payload = yield call(() => Fetcher(
      `${API_URL}users/edit-user`,
      'POST',
      data.payload,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}
    ))
  } catch (e) {
    console.log('error', e)
  }
}

export function* editAvatar(data) {
  try {
    yield put({type: LOAD_AVATAR})
    const payload = yield call(() => Fetcher(
      ` ${API_URL}users/load-avatar`,
      'POST',
      data.payload,
      {Authorization: `Bearer ${localStorage.getItem('token')}`},
      false
    ))
    console.log(payload)
    yield put({type: LOAD_AVATAR_COMPLETE})
    // yield put({type: SHOW_MESSAGE})
  } catch (e) {
    const payload = {text: `ошибка ${e.statusText}`, severity: 'error'}
    yield put({type: SHOW_MESSAGE, payload})
    console.log('ERROR', e)
  }
}

export function* userEditWatcher() {
  yield takeEvery(EDIT_USER, editUser)
  yield takeEvery(EDIT_AVATAR, editAvatar)
}