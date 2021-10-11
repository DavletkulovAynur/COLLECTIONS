import {call, takeEvery} from 'redux-saga/effects'
import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'
import {DELETE_COLLECTION} from "../../reducers/components/deleteCollectionReducer";

function* sagaDeleteCollectionWorker(data) {
  try {
    console.log(data.payload)
    const payload = yield call (() => Fetcher(`${API_URL}collection/delete`,
      'POST',
      data.payload,
      {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    ))
  } catch (e) {
    console.log(e)
  }
}

export function* sagaDeleteCollectionWatcher() {
  yield takeEvery(DELETE_COLLECTION, sagaDeleteCollectionWorker)
}

