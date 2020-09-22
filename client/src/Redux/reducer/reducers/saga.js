import {takeEvery, put, call} from 'redux-saga/effects'
import {GET_GAMES, WRITE_DOWN_GAMES} from "../../types";
import {appHideLoading} from "../../actions/action";

export function* sagaWatcher() {
  yield takeEvery(GET_GAMES, saga)
}

function* saga() {
  try {
   const payload = yield call(fetchPosts)
    yield put({ type: WRITE_DOWN_GAMES, payload })
    yield put(appHideLoading())
  } catch (e) {
    
  }
}

async function fetchPosts() {
  const response = await fetch('http://localhost:5000/game/get')
  return await response.json()
}
