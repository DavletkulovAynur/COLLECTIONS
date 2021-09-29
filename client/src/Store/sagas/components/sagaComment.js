import {call, put, takeEvery} from 'redux-saga/effects'
import {
  COMMENT_REMOVE,
  COMMENT_UPDATE,
  LOADING_COLLECTION_UPDATE,
  LOADING_HIDDEN_COLLECTION_UPDATE,
  UPDATE_COLLECTION_VIEW
} from '../../types'
import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'

export function* addComment(data) {
  try {
    yield put({type: LOADING_COLLECTION_UPDATE})
    const payload =  yield call(() => Fetcher(`${API_URL}comment/add`,
      'PUT',
      data.payload,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}))
    yield put({type: UPDATE_COLLECTION_VIEW, payload})
    yield put({type: LOADING_HIDDEN_COLLECTION_UPDATE})
  } catch (e) {
    console.log(e)
  }
}

export function* removeComment(data) {
  try {
    yield put({type: LOADING_COLLECTION_UPDATE})
    const payload =  yield call(() => Fetcher(`${API_URL}comment/remove`,
      'PUT',
      data.payload,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}))
    // yield put({type: UPDATE_COLLECTION_VIEW, payload})
    // yield put({type: LOADING_HIDDEN_COLLECTION_UPDATE})
  } catch (e) {
    console.log(e)
  }
}

export function* commentWatcher() {
  yield takeEvery(COMMENT_UPDATE, addComment)
  yield takeEvery(COMMENT_REMOVE, removeComment)
}