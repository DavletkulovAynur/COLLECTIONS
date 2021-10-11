import {call, put, takeEvery} from 'redux-saga/effects'
import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'
import {DELETE_COLLECTION, DELETE_COLLECTION_LOADING} from "../../reducers/components/deleteCollectionReducer";
import {CHANGE_STATE_POPUP} from "../../reducers/components/PopUpCardReducer";

function* sagaDeleteCollectionWorker(data) {
  try {
    yield put({type: DELETE_COLLECTION_LOADING, payload: true})
    yield call (() => Fetcher(`${API_URL}collection/delete`,
      'POST',
      data.payload,
      {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    ))
    yield put({type: DELETE_COLLECTION_LOADING, payload: false})
    yield put({type: CHANGE_STATE_POPUP, payload: {
        statePopUp: false,
        idCollection: null
      }})

  } catch (e) {
    console.log(e)
  }
}

export function* sagaDeleteCollectionWatcher() {
  yield takeEvery(DELETE_COLLECTION, sagaDeleteCollectionWorker)
}

