import { call, put, takeEvery } from "redux-saga/effects";
import Fetcher from "../../../Common/utils/fetch";
import {
  ADD_BOOKMARK,
  ADD_BOOKMARK_UPDATE_STATE,
  DELETE_BOOKMARK,
  DELETE_BOOKMARK_UPDATE_STATE,
  GET_BOOKMARK_COLLECTION,
  WRITE_DOWN_BOOKMARK_COLLECTION,
} from "../../types";
import {
  collectionLoaderAction,
  GET_SUBSCRIBE_COLLECTION,
  writeDownSubscribeCollectionAction,
} from "../../reducers/components/collectionReducer";
import { showMessageAction } from "../../reducers/components/showMessageReducer";
import { alertMessagesText, API_URL } from "../../../config";

function* addBookmark(data) {
  try {
    yield call(() =>
      Fetcher(`${API_URL}/users/save-bookmark`, "PUT", data.payload, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
    );

    const newTest = yield call(() => {
      return [...data.payload.allBookmarkArray, data.payload.bookmarkID];
    });

    yield put({ type: ADD_BOOKMARK_UPDATE_STATE, payload: newTest });

    yield put(showMessageAction({ text: `${alertMessagesText.addBookmark}` }));
  } catch (e) {
    console.log(e);
  }
}

function* deleteBookmark(data) {
  try {
    yield call(() =>
      Fetcher(`${API_URL}/users/delete-bookmark`, "PUT", data.payload, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
    );

    const payload = yield call(() => {
      return data.payload.allBookmarkArray.filter(
        (item) => item !== data.payload.bookmarkID
      );
    });

    yield put({ type: DELETE_BOOKMARK_UPDATE_STATE, payload });
    yield put(showMessageAction({ text: `${alertMessagesText.deleteBookmark}` }));
  } catch (e) {
    console.log(e);
  }
}

function* getBookmarkCollection(formData) {
  try {
    //исправить
    const test = {
      data: formData.payload,
    };
    const payload = yield call(() =>
      Fetcher(`${API_URL}/collection/get-bookmark`, "POST", test, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
    );

    yield put({ type: WRITE_DOWN_BOOKMARK_COLLECTION, payload });
    yield put(collectionLoaderAction(false));
  } catch (e) {
    console.log(e);
  }
}

function* getSubscribeCollection(data) {
  try {
    const subscribe = {
      userSubscribe: data.payload,
    };
    const payload = yield call(() =>
      Fetcher(
        `${API_URL}/collection/get-subscribe-collection`,
        "POST",
        subscribe,
        { Authorization: `Bearer ${localStorage.getItem("token")}` }
      )
    );
    yield put(writeDownSubscribeCollectionAction(payload));
  } catch (e) {
    console.log("ERROR", e);
  }
}

export function* bookmarkWatcher() {
  yield takeEvery(GET_BOOKMARK_COLLECTION, getBookmarkCollection);
  yield takeEvery(ADD_BOOKMARK, addBookmark);
  yield takeEvery(DELETE_BOOKMARK, deleteBookmark);
  yield takeEvery(GET_SUBSCRIBE_COLLECTION, getSubscribeCollection);
}
