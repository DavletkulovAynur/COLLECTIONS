import { call, put, takeEvery } from "redux-saga/effects";
import Fetcher from "../../../Common/utils/fetch";
import { API_URL, alertMessagesText } from "../../../config";
import {
  ADD_COLLECTION,
  SEND_COLLECTION_LOAD,
  SUCCESSFULLY_SEND_COLLECTION,
} from "../../types";
import { showMessageAction } from "../../reducers/components/showMessageReducer";
import { updateAddCollectionAction } from "Store/reducers/components/collectionReducer";

function* addNewCollectionWorker(formData) {
  try {
    yield put({ type: SEND_COLLECTION_LOAD });
    const payload = yield call(() =>
      Fetcher(
        `${API_URL}/collection/add`,
        "POST",
        formData.payload,
        {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        false
      )
    );
    yield put(updateAddCollectionAction(payload));
    yield put({ type: SUCCESSFULLY_SEND_COLLECTION, payload });

    yield put(showMessageAction({ text: `${alertMessagesText.addNewCollection}` }));
  } catch (e) {
    console.log(e);
  }
}

export function* addNewCollectionWatcher() {
  yield takeEvery(ADD_COLLECTION, addNewCollectionWorker);
}
