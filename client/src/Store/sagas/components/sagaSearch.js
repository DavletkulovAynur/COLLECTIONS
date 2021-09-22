import {call, put, takeEvery} from "redux-saga/effects";
import {
  SEARCH_COLLECTION,
  SEARCH_COLLECTION_HIDE_LOADING,
  SEARCH_COLLECTION_LOADING,
  WRITE_DOWN_SEARCH_COLLECTION
} from "../../types";
import Fetcher from "../../../Common/utils/fetch";

function* searchCollectionWorker(data) {
  try {
    yield put({type: SEARCH_COLLECTION_LOADING})
    const payload = yield call (() => Fetcher('http://localhost:5000/collection/search', 'POST', data.payload))
    yield put({type: WRITE_DOWN_SEARCH_COLLECTION, payload})
    yield put ({type: SEARCH_COLLECTION_HIDE_LOADING})
  } catch (e) {
    console.log('error', e)
  }
}

export function* searchCollectionWatcher() {
  yield takeEvery(SEARCH_COLLECTION, searchCollectionWorker)
}