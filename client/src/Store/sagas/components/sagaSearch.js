import {call, put} from "redux-saga/effects";
import {SEARCH_COLLECTION_HIDE_LOADING, SEARCH_COLLECTION_LOADING, WRITE_DOWN_SEARCH_COLLECTION} from "../../types";
import Fetcher from "../../../Common/utils/fetch";

export function* searchCollection(data) {
  try {
    yield put({type: SEARCH_COLLECTION_LOADING})
    const payload = yield call (() => Fetcher('http://localhost:5000/collection/search', 'POST', data.payload))
    yield put({type: WRITE_DOWN_SEARCH_COLLECTION, payload})
    yield put ({type: SEARCH_COLLECTION_HIDE_LOADING})
  } catch (e) {
    console.log('error', e)
  }
}