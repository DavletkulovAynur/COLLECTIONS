import {call, put, takeEvery} from "redux-saga/effects";
import Fetcher from "../../../Common/utils/fetch";
import {API_URL} from "../../../config";
import {ADD_COLLECTION, SUCCESSFULLY_SEND_COLLECTION} from "../../types";

function* addNewCollectionWorker(formData) {
  try {
    console.log('formData.payload', formData.payload)
    const payload = yield call (() => Fetcher(`${API_URL}collection/add`,
      'POST',
      formData.payload,
      {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      false
    ))
    yield put({type: SUCCESSFULLY_SEND_COLLECTION, payload})
  } catch (e) {
    console.log(e)
  }
}

export function* addNewCollectionWatcher() {
  yield takeEvery(ADD_COLLECTION, addNewCollectionWorker)
}