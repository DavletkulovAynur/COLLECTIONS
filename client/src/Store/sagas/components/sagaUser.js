import {call, put, takeEvery} from "redux-saga/effects";
import Fetcher from "../../../Common/utils/fetch";
import {API_URL} from "../../../config";
import {
  GET_USER,
  GET_USER_COLLECTION,
  WRITE_DOWN_GET_USER,
  WRITE_DOWN_USER_COLLECTION
} from "../../types";

function* getUserWorker(data) {
  try {
    const user = {
      userId: data.payload
    }
    const payload = yield call(() => Fetcher(`${API_URL}/users/get-user`, 'POST', user))

    yield put({type: WRITE_DOWN_GET_USER, payload})
  } catch (e) {
    console.log('error', e)
  }
}

function* getUserCollectionWorker(data) {
  try {
    const user = {
      userId: data.payload
    }
    const payload = yield call(() => Fetcher(`${API_URL}/users/get-user-collection`, 'POST', user))
    yield put({type: WRITE_DOWN_USER_COLLECTION, payload})
  } catch(e) {
    console.log('error', e)
  }
}

export function* userWatcher() {
  yield takeEvery(GET_USER, getUserWorker)
  yield takeEvery(GET_USER_COLLECTION, getUserCollectionWorker)
}