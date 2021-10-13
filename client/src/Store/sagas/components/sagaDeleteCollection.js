import {call, put, select, takeEvery} from 'redux-saga/effects'
import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'
import {DELETE_COLLECTION, DELETE_COLLECTION_LOADING} from "../../reducers/components/deleteCollectionReducer";
import {CHANGE_STATE_POPUP} from "../../reducers/components/PopUpCardReducer";
import {showMessageAction} from "../../reducers/components/showMessageReducer";
import {superFunctionForWorkingWithArray} from "../../../Common/utils/superFunctionForWorkingWithArray";
import {WRITE_DOWN_ALL_COLLECTION} from "../../types";


const collection = (state) => state.collectionReducer

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
    const showMessageText = {text: 'Удалили успешно коллекцию'}
    yield put(showMessageAction(showMessageText))
    // TODO обновление функции
    let {allCollection} = yield select(collection)
    const a = allCollection.filter((item) => item._id !== data.payload.idCollection)
    yield put({type: WRITE_DOWN_ALL_COLLECTION, payload: a})
  } catch (e) {
    console.log(e)
  }
}

export function* sagaDeleteCollectionWatcher() {
  yield takeEvery(DELETE_COLLECTION, sagaDeleteCollectionWorker)
}

