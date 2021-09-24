import {call, put, takeEvery} from "redux-saga/effects";
import Fetcher from "../../../Common/utils/fetch";
import {API_URL} from "../../../config";
import {
  EDIT_AVATAR,
  EDIT_PROFILE_LOADING, EDIT_PROFILE_LOADING_COMPLETE,
  EDIT_USER,
  LOAD_AVATAR,
  LOAD_AVATAR_COMPLETE,
  SHOW_MESSAGE
} from "../../types";

function* userInfoEditWorker(data) {
  try {
    yield put({type: EDIT_PROFILE_LOADING})
    yield call(() => Fetcher(
      `${API_URL}users/edit-user`,
      'POST',
      data.payload,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}
    ))
    yield put({type: EDIT_PROFILE_LOADING_COMPLETE})
    const payload = {text: `успешно`, severity: 'success'}
    yield put({type: SHOW_MESSAGE, payload})
  } catch (e) {
    yield put({type: EDIT_PROFILE_LOADING_COMPLETE})
    console.log('error', e)
  }
}

function* userAvatarEditWorker(data) {
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
  yield takeEvery(EDIT_USER, userInfoEditWorker)
  yield takeEvery(EDIT_AVATAR, userAvatarEditWorker)
}