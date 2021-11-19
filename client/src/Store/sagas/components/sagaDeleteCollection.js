import { call, put, select, takeEvery } from "redux-saga/effects";
import Fetcher from "../../../Common/utils/fetch";
import { alertMessagesText, API_URL } from "../../../config";
import {
  DELETE_COLLECTION,
  DELETE_COLLECTION_LOADING,
} from "../../reducers/components/deleteCollectionReducer";
import { CHANGE_STATE_POPUP } from "../../reducers/components/PopUpCardReducer";
import { showMessageAction } from "../../reducers/components/showMessageReducer";
import { WRITE_DOWN_ALL_COLLECTION, WRITE_DOWN_BOOKMARK_COLLECTION, WRITE_DOWN_COLLECTION } from "../../types";

const collection = (state) => state.collectionReducer;

const COMPLAIN_COLLECTION = "COMPLAIN_COLLECTION";

function* sagaDeleteCollectionWorker(data) {
  try {
    yield put({ type: DELETE_COLLECTION_LOADING, payload: true });
    yield call(() =>
      Fetcher(`${API_URL}/collection/delete`, "POST", data.payload, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
    );
    yield put({ type: DELETE_COLLECTION_LOADING, payload: false });
    yield put({
      type: CHANGE_STATE_POPUP,
      payload: {
        statePopUp: false,
        idCollection: null,
      },
    });
    const showMessageText = { text: `${alertMessagesText.deleteCollection}` };
    yield put(showMessageAction(showMessageText));
    // TODO: ужасная реализация 
    let { allCollection, myCollection, bookmarkCollection } = yield select(collection);
    const a = allCollection.filter(
      (item) => item._id !== data.payload.idCollection
    );
    const b = myCollection.filter(
      (item) => item._id !== data.payload.idCollection
    );
    const c = bookmarkCollection.filter(
      (item) => item._id !== data.payload.idCollection
    );
    yield put({ type: WRITE_DOWN_ALL_COLLECTION, payload: a });
    yield put({ type: WRITE_DOWN_COLLECTION, payload: b });
    yield put({ type: WRITE_DOWN_BOOKMARK_COLLECTION, payload: {data: c} });
  } catch (e) {
    console.log(e);
  }
}

function* sagaComplainCollectionWorker(data) {
  try {
    yield put({ type: DELETE_COLLECTION_LOADING, payload: true });
    yield call(() =>
      Fetcher(`${API_URL}/collection/complain`, "POST", data.payload, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
    );
    yield put({ type: DELETE_COLLECTION_LOADING, payload: false });
    yield put({
      type: CHANGE_STATE_POPUP,
      payload: {
        statePopUp: false,
        idCollection: null,
      },
    });
    yield put(
      showMessageAction({ text: `${alertMessagesText.complainCollection}` })
    );
  } catch (e) {
    console.log(e);
  }
}

export function* sagaDeleteCollectionWatcher() {
  yield takeEvery(DELETE_COLLECTION, sagaDeleteCollectionWorker);
  yield takeEvery(COMPLAIN_COLLECTION, sagaComplainCollectionWorker);
}

// actions
export const complainCollectionAction = (payload) => ({
  type: COMPLAIN_COLLECTION,
  payload,
});
