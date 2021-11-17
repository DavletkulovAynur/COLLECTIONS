import Fetcher from "../../../Common/utils/fetch";
import { alertMessagesText, API_URL } from "../../../config";
import { call, put, takeEvery, select } from "redux-saga/effects";
import { SUBSCRIBE_ON_USER, UNSUBSCRIBE_ON_USER } from "../../types";
import {
  GET_ALL_SUBSCRIBE,
  getAllSubscribeLoaderAction,
  loaderSubscribeAction,
  writeDownFullInfoSubscribeUser,
} from "../../reducers/components/subscribeReducer";
import {
  subscribeFromThisUserAction,
  unSubscribeFromThisUserAction,
} from "../../reducers/components/userAreaPageReducer";
import { showMessageAction } from "../../reducers/components/showMessageReducer";
import { unsubscribeChangeOwnerAction } from "Store/reducers/components/authReducer";

const auth = (state) => state.authReducer;

function* subscribeOnUserWorker(data) {
  try {
    const user = {
      subscribeUserId: data.payload,
    };
    let project = yield select(auth);
    yield subscribe(user, "subscribe-on-user", `${alertMessagesText.subscribeOnUser}`);
    yield put(subscribeFromThisUserAction(project.owner.userId));
  } catch (e) {
    console.log("error", e);
  }
}

function* unSubscribeOnUserWorker(data) {
  try {
    const user = {
      subscribeUserId: data.payload,
    };
    yield subscribe(user, "unsubscribe-on-user", `${alertMessagesText.unSubscribeOnUser}`);
    yield put(unSubscribeFromThisUserAction(user));
    yield put(unsubscribeChangeOwnerAction(user));
  } catch (e) {
    console.log("error", e);
  }
}

function* getAllSubscribeWorker(data) {
  try {
    yield put(getAllSubscribeLoaderAction(true));
    const payload = yield call(() =>
      Fetcher(`${API_URL}/subscribe/get-all-subscribe`, "POST", data.payload, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
    );

    yield put(writeDownFullInfoSubscribeUser(payload.data));
    yield put(getAllSubscribeLoaderAction(false));
  } catch (e) {
    console.log("ERROR", e);
  }
}

export function* subscribeWatcher() {
  yield takeEvery(SUBSCRIBE_ON_USER, subscribeOnUserWorker);
  yield takeEvery(UNSUBSCRIBE_ON_USER, unSubscribeOnUserWorker);
  yield takeEvery(GET_ALL_SUBSCRIBE, getAllSubscribeWorker);
}

// UTILS
function* subscribe(user, url, messageText) {
  yield put(loaderSubscribeAction(true));
  const payload = yield call(() =>
    Fetcher(`${API_URL}/subscribe/${url}`, "POST", user, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    })
  );
  yield put(loaderSubscribeAction(false));
  yield put(showMessageAction({ text: messageText }));
}
