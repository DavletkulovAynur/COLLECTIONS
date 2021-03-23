import {
  DELETE_BOOKMARK_UPDATE_STATE,
  WRITE_DOWN_ALL_COLLECTION,
  WRITE_DOWN_BOOKMARK_COLLECTION,
  WRITE_DOWN_COLLECTION
} from "Redux/types";

const initialState = {
  myCollection: [],
  allCollection: [],
  bookmarkCollection: []
}

export const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_DOWN_COLLECTION:
      return {...state, myCollection: [...action.payload.data]}
    case WRITE_DOWN_ALL_COLLECTION:
      return  {...state, allCollection: [...action.payload.data]}
    case WRITE_DOWN_BOOKMARK_COLLECTION:
      return {...state, bookmarkCollection: [...action.payload.data]}
    default:
      return state
  }
}
