import { call, put, takeEvery } from "redux-saga/effects";
import {
  WRITE_REDUCER_TOKEN,
  LOGIN_AUTHENTICATION,
  CHECK_REGISTRATION,
  CHECK_REGISTRATION_RETURN_FALSE,
  GET_ALL_COLLECTION,
  SAGA_AUTH_TOKEN,
  REGISTRATION,
  SAGA_LOGIN,
  EMAIL_RESENDING,
} from "../../types";
import Fetcher from "../../../Common/utils/fetch";

import { showMessageAction } from "../../reducers/components/showMessageReducer";
import { alertMessagesText, API_URL } from "../../../config";
import {
  CHECK_HASH,
  logoutAction,
} from "Store/reducers/components/authReducer";

function* loginWorker(user) {
  try {
    yield put({ type: CHECK_REGISTRATION });
    const payload = yield call(() =>
      Fetcher(`${API_URL}/auth/login`, "POST", user.payload)
    );

    yield put({ type: LOGIN_AUTHENTICATION, payload });
    yield put({ type: CHECK_REGISTRATION_RETURN_FALSE });
  } catch (e) {
    const payload = { text: `${e.message}`, severity: "error" };
    yield put(showMessageAction(payload));
    yield put({ type: CHECK_REGISTRATION_RETURN_FALSE });
  }
}

function* registrationWorker(data) {
  try {
    const payload = yield call(() =>
      Fetcher(`${API_URL}/auth/register`, "POST", data.payload)
    );
    yield put({ type: LOGIN_AUTHENTICATION, payload });
  } catch (e) {
    const payload = { text: `${e.message}`, severity: "error" };
    yield put(showMessageAction(payload));
  }
}

function* authWorker() {
  try {
    const payload = yield call(() =>
      Fetcher(`${API_URL}/auth/auth`, "GET", "", {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
    );
    yield put({ type: WRITE_REDUCER_TOKEN, payload });
  } catch (e) {
    yield put(logoutAction());
  }
}

function* authEmailResendingWorker() {
  try {
    const payload = yield call(() =>
      Fetcher(`${API_URL}/authentication/email-resending`, "POST", "", {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      })
    );

    yield put(
      showMessageAction({ text: `${alertMessagesText.authEmailResending}` })
    );
  } catch (e) {
    yield put(
      showMessageAction({ text: `Не удалось перезапросить подтверждение` })
    );
    yield put(logoutAction());
  }
}

function* checkHashWorker(data) {
  try {
    const payload = yield call(() =>
      Fetcher(`${API_URL}/authentication/check-hash`, "POST", data.payload)
    );

    if(payload.message === 'success') {
      yield put(showMessageAction({ text: `Hash есть` }));
    }
  } catch (e) {}
}

export function* authWatcher() {
  yield takeEvery(SAGA_AUTH_TOKEN, authWorker);
  yield takeEvery(REGISTRATION, registrationWorker);
  yield takeEvery(SAGA_LOGIN, loginWorker);
  yield takeEvery(EMAIL_RESENDING, authEmailResendingWorker);
  yield takeEvery(CHECK_HASH, checkHashWorker);
}
