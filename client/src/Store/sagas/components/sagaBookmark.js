import {call, put} from 'redux-saga/effects'
import Fetcher from '../../../Common/utils/fetch'
import {
    ADD_BOOKMARK_UPDATE_STATE,
    DELETE_BOOKMARK_UPDATE_STATE, SHOW_MESSAGE,
    WRITE_DOWN_BOOKMARK_COLLECTION
} from '../../types'

    export function* addBookmark(data) {
        try {
           yield call (() => Fetcher('http://localhost:5000/users/save-bookmark',
                'PUT',
                        data.payload,
                {Authorization: `Bearer ${localStorage.getItem('token')}`}))

            // const payload = yield call(() => {
            //     return  [...data.payload.allBookmarkArray, data.payload.bookmarkID]
            // })

            // yield put({type: ADD_BOOKMARK_UPDATE_STATE, payload})
            const payload = {
               text: 'Вы успешно добавили',
            }
            yield put({type: SHOW_MESSAGE, payload})
            console.log('addBookmark')
        } catch(e) {
            console.log(e)
        }
    }

    export function* deleteBookmark(data) {
        try {
            yield call(() => Fetcher('http://localhost:5000/users/delete-bookmark',
                'PUT',
                        data.payload,
                {Authorization: `Bearer ${localStorage.getItem('token')}`}))

            const payload = yield call(() => {
               return  data.payload.allBookmarkArray.filter((item) => item !==  data.payload.bookmarkID)
            })

            yield put({type: DELETE_BOOKMARK_UPDATE_STATE, payload})
            console.log('deleteBookmark')

        } catch (e) {
            console.log(e)
        }
    }

    export function* getBookmarkCollection(formData) {
        try {
            //исправить
            const test = {
                data: formData.payload
            }
            const payload = yield call(() => Fetcher(
                'http://localhost:5000/collection/get-bookmark',
                'POST',
                test,
                {Authorization: `Bearer ${localStorage.getItem('token')}`}))

            yield put({type: WRITE_DOWN_BOOKMARK_COLLECTION, payload})

        } catch (e) {
            console.log(e)
        }
    }