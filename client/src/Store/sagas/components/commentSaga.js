import {call, put} from 'redux-saga/effects'
import {LOADING_COLLECTION_UPDATE, LOADING_HIDDEN_COLLECTION_UPDATE, UPDATE_COLLECTION_VIEW} from '../../types'
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

    console.log(payload)
    // yield put({type: UPDATE_COLLECTION_VIEW, payload})
    // yield put({type: LOADING_HIDDEN_COLLECTION_UPDATE})
  } catch (e) {
    console.log(e)
  }
}