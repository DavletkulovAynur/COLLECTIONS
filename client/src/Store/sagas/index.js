import {fork, all} from 'redux-saga/effects'

import {authWatcher} from './components/sagaAuth'
import {commentWatcher} from './components/sagaComment'
import {userEditWatcher} from './components/sagaEditUser'
import {bookmarkWatcher} from './components/sagaBookmark'
import {addNewCollectionWatcher} from './components/sagaAddNewCollection'
import {getCollectionDataWatcher} from './components/sagaGetCollectionData'
import {searchCollectionWatcher} from './components/sagaSearch'
import {subscribeWatcher} from './components/sagaSubscribe'


export function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(commentWatcher),
    fork(userEditWatcher),
    fork(bookmarkWatcher),
    fork(addNewCollectionWatcher),
    fork(getCollectionDataWatcher),
    fork(searchCollectionWatcher),
    fork(subscribeWatcher),
  ])

}




