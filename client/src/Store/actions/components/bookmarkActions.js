import {ADD_BOOKMARK, DELETE_BOOKMARK} from "../../types";


function bookmarkDeleteAction(payload) {
  return({
    type: DELETE_BOOKMARK,
    payload
  })
}

function addBookmarkAction(payload) {
  return({
    type: ADD_BOOKMARK,
    payload
  })
}

// function addBookmarkRemoveEventShowMessage() {
//   return({
//     type: BOOKMARK_ADD_REMOVE
//   })
// }

export {bookmarkDeleteAction, addBookmarkAction}