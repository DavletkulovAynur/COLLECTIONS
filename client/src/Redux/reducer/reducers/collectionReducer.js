import {
  WRITE_DOWN_ALL_COLLECTION,
  WRITE_DOWN_BOOKMARK_COLLECTION,
  WRITE_DOWN_COLLECTION, WRITE_DOWN_SEARCH_COLLECTION
} from "Redux/types";

const initialState = {
  myCollection: [],
  allCollection: [],
  bookmarkCollection: [],
  searchCollection: []
}

export const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_DOWN_COLLECTION:
      return {...state, myCollection: [...action.payload.data]}
    case WRITE_DOWN_ALL_COLLECTION:
      return  {...state, allCollection: [...action.payload.data]}
    case WRITE_DOWN_BOOKMARK_COLLECTION:
      return {...state, bookmarkCollection: [...action.payload.data]}
    case WRITE_DOWN_SEARCH_COLLECTION:
      console.log(action.payload.data.searchResult)
      return {...state, searchCollection: [...action.payload.data.searchResult]}
    default:
      return state
  }
}
