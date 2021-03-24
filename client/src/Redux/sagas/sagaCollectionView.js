import {put, call} from 'redux-saga/effects'
import Fetcher from '../../Common/utils/fetch'
import {API_URL} from '../../config'
import {
    LOADING_COLLECTION_UPDATE, LOADING_HIDDEN_COLLECTION_UPDATE,
    UPDATE_COLLECTION_VIEW,
    WRITE_DOWN_COLLECTION_VIEW
} from '../types'

export function* commentUpdate(data) {
    try {
        yield put({type: LOADING_COLLECTION_UPDATE})
        const payload =  yield call(() => Fetcher('http://localhost:5000/collection/comment-update', 'PUT', data.payload))
        yield put({type: UPDATE_COLLECTION_VIEW, payload})
        yield put({type: LOADING_HIDDEN_COLLECTION_UPDATE})
    } catch (e) {
        console.log(e)
    }
}

export function* getCollectionView(data) {
    try {
        const payload = yield call(() => Fetcher(`${API_URL}collection/get-collection-view`, 'POST', data.payload))
        yield put({type: WRITE_DOWN_COLLECTION_VIEW, payload})
    } catch (e){
        console.log(e)
    }
}