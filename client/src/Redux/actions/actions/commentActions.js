import {COMMENT_UPDATE} from "../../types";

function addCommentAction(payload) {
  return({
    type: COMMENT_UPDATE,
    payload
  })
}

function removeCommentAction(payload) {
  return({
    type: COMMENT_UPDATE,
    payload
  })
}

export {addCommentAction}