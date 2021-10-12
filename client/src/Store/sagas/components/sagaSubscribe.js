import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'
import {call, put, takeEvery, select} from 'redux-saga/effects'
import {SHOW_MESSAGE, SUBSCRIBE_ON_USER, UNSUBSCRIBE_ON_USER} from '../../types'
import {
  GET_ALL_SUBSCRIBE,
  getAllSubscribeLoaderAction,
  loaderSubscribeAction
} from '../../reducers/components/subscribeReducer'
import {
  subscribeFromThisUserAction,
  unSubscribeFromThisUserAction
} from '../../reducers/components/userAreaPageReducer'

const test = (state) => state.authReducer



function* subscribeOnUserWorker(data) {
  try {
    const user = {
      subscribeUserId: data.payload
    }
    let project = yield select(test);
    yield subscribe(user, 'subscribe-on-user', 'Успешно подписались')
    yield put(subscribeFromThisUserAction(project.owner.userId))
  } catch (e) {
    console.log('error', e)
  }
}

function* unSubscribeOnUserWorker(data) {
  try {
    const user = {
      subscribeUserId: data.payload
    }
    yield subscribe(user, 'unsubscribe-on-user', 'Успешно отписались' )
    yield put(unSubscribeFromThisUserAction(user))
  } catch (e) {
    console.log('error', e)
  }
}

function* getAllSubscribeWorker(data) {
  try {
    yield put(getAllSubscribeLoaderAction(true))
    const payload = yield call(() => Fetcher(
      `${API_URL}subscribe/get-all-subscribe`,
      'POST',
      data.payload,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}
    ))
    yield put(getAllSubscribeLoaderAction(false))
    console.log(payload.data)
  } catch (e) {
    console.log('ERROR', e)
  }
}

export function* subscribeWatcher() {
  yield takeEvery(SUBSCRIBE_ON_USER, subscribeOnUserWorker)
  yield takeEvery(UNSUBSCRIBE_ON_USER, unSubscribeOnUserWorker)
  yield takeEvery(GET_ALL_SUBSCRIBE, getAllSubscribeWorker)
}

// UTILS
function* subscribe(user, url, messageText) {
  yield put(loaderSubscribeAction(true))
  yield call(() => Fetcher(
    `${API_URL}users/${url}`,
    'POST',
    user,
    {Authorization: `Bearer ${localStorage.getItem('token')}`}
  ))
  yield put(loaderSubscribeAction(false))
  const showText = {text: messageText}
  yield put({type: SHOW_MESSAGE, payload: showText})
}



