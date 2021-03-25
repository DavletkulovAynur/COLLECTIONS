import Fetcher from '../../Common/utils/fetch'
import {API_URL} from '../../config'
import {put, call} from 'redux-saga/effects'
import {WRITE_DOWN_GET_USER} from "../types";

export function* getUser(data) {
    try {
        const user = {
            userId: data.payload
        }
        const payload = yield call(() => Fetcher(`${API_URL}users/get-user`, 'POST', user))
        console.log(payload.data.data)
        yield put({type: WRITE_DOWN_GET_USER, payload})
    } catch (e) {
        console.log('error', e)
    }
}