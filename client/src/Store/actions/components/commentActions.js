import {COMMENT_REMOVE, COMMENT_UPDATE} from '../../types'

function addCommentAction(payload) {
  return({
    type: COMMENT_UPDATE,
    payload
  })
}

function removeCommentAction(payload) {
  return({
    type: COMMENT_REMOVE,
    payload
  })
}

export {addCommentAction, removeCommentAction}