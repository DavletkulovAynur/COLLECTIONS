import {call, put, takeEvery} from 'redux-saga/effects'
import {
  COMMENT_REMOVE,
  COMMENT_UPDATE,
} from '../../types'
import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'
import {
  DELETE_COLLECTION_COMMENT, GET_COMMENTS, removeCommentLoadingAction,
  SEND_COMMENT_LOADING,
  UPDATE_COLLECTION_COMMENT,
  writeDownCommentsAction
} from '../../reducers/components/collectionViewReducer'
import {showMessageAction} from '../../reducers/components/showMessageReducer'

function* getComments(data) {
  try {
    console.log(data)
	const payload = yield call(() => Fetcher(`${API_URL}/comment/get`,
    'POST',
    data.payload,
    {Authorization: `Bearer ${localStorage.getItem('token')}`}))
	
	console.log('payload', payload)
	yield put(writeDownCommentsAction(payload))



  } catch(e) {
    console.log('error', e)
  }
}

export function* addComment(data) {
  try {
    yield put({type: SEND_COMMENT_LOADING, payload: true})
    const payload =  yield call(() => Fetcher(`${API_URL}/comment/add`,
      'PUT',
      data.payload,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}))
    const messageText = {text: `успешно`, severity: 'success'}
    yield put(showMessageAction(messageText))

    yield put({type: UPDATE_COLLECTION_COMMENT, payload})
    yield put({type: SEND_COMMENT_LOADING, payload: false})
  } catch (e) {
    console.log(e)
  }
}

export function* removeComment(data) {
  try {
    yield put(removeCommentLoadingAction(true))
    console.log(data.payload)
    const payload =  yield call(() => Fetcher(`${API_URL}/comment/remove`,
      'PUT',
      data.payload,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}))

    const messageText = {text: `Комментарий удален`, severity: 'success'}
    yield put(showMessageAction(messageText))
    yield put({type: DELETE_COLLECTION_COMMENT, payload})
    yield put(removeCommentLoadingAction(false))
  } catch (e) {
    console.log(e)
  }
}

export function* commentWatcher() {
  yield takeEvery(COMMENT_UPDATE, addComment)
  yield takeEvery(COMMENT_REMOVE, removeComment)
  yield takeEvery(GET_COMMENTS, getComments)
}