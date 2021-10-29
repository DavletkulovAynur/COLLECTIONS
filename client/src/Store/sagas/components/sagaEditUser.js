import {call, put, takeEvery} from 'redux-saga/effects'
import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'
import {
  EDIT_AVATAR,
  EDIT_PROFILE_LOADING, EDIT_PROFILE_LOADING_COMPLETE,
  EDIT_USER,
  LOAD_AVATAR,
  LOAD_AVATAR_COMPLETE,
} from "../../types";
import {showMessageAction} from "../../reducers/components/showMessageReducer";
import { loadNewAvatarAction } from 'Store/reducers/components/authReducer';

function* userInfoEditWorker(data) {
  try {
    yield put({type: EDIT_PROFILE_LOADING})
    yield call(() => Fetcher(
      `${API_URL}/users/edit-user`,
      'POST',
      data.payload,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}
    ))
    yield put({type: EDIT_PROFILE_LOADING_COMPLETE})
    const showText = {text: `успешно`}
    yield put(showMessageAction(showText))
  } catch (e) {
    yield put({type: EDIT_PROFILE_LOADING_COMPLETE})
    console.log('error', e)
  }
}

function* userAvatarEditWorker(data) {
  try {
    yield put({type: LOAD_AVATAR})
    const payload = yield call(() => Fetcher(
      ` ${API_URL}/users/load-avatar`,
      'POST',
      data.payload,
      {Authorization: `Bearer ${localStorage.getItem('token')}`},
      false
    ))
    console.log(payload)
    yield put({type: LOAD_AVATAR_COMPLETE})
    yield put(showMessageAction({text: `успешно`}))
    yield put(loadNewAvatarAction(payload))

  } catch (e) {
    const payload = {text: `ошибка ${e.statusText}`, severity: 'error'}
    yield put(showMessageAction(payload))
    console.log('ERROR', e)
  }
}

export function* userEditWatcher() {
  yield takeEvery(EDIT_USER, userInfoEditWorker)
  yield takeEvery(EDIT_AVATAR, userAvatarEditWorker)
}