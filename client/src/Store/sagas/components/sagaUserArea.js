import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'
import {call, takeEvery} from 'redux-saga/effects'
import {SUBSCRIBE_ON_USER, UNSUBSCRIBE_ON_USER} from '../../types'



function* subscribeOnUserWorker(data) {
  try {
    const user = {
      subscribeUserId: data.payload
    }

    yield call(() => Fetcher(
      `${API_URL}users/subscribe-on-user`,
      'POST',
      user,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}
    ))

  } catch (e) {
    console.log('error', e)
  }
}

function* unSubscribeOnUserWorker(data) {
  try {
    const user = {
      subscribeUserId: data.payload
    }

    yield call(() => Fetcher(
      `${API_URL}users/unsubscribe-on-user`,
      'POST',
      user,
      {Authorization: `Bearer ${localStorage.getItem('token')}`}
    ))

  } catch (e) {
    console.log('error', e)
  }
}

export function* subscribeWatcher() {
  yield takeEvery(SUBSCRIBE_ON_USER, subscribeOnUserWorker)
  yield takeEvery(UNSUBSCRIBE_ON_USER, unSubscribeOnUserWorker)
}



