import {put, call} from 'redux-saga/effects'
import Fetcher from '../../../Common/utils/fetch'
import {API_URL} from '../../../config'
import {WRITE_DOWN_COLLECTION_VIEW} from '../../types'


export function* getCollectionView(data) {
    try {
        const payload = yield call(() => Fetcher(`${API_URL}collection/get-collection-view`,
            'POST',
            data.payload,
            {Authorization: `Bearer ${localStorage.getItem('token')}`}))
        yield put({type: WRITE_DOWN_COLLECTION_VIEW, payload})
    } catch (e){
        console.log(e)
    }
}