import {
  SEARCH_COLLECTION_HIDE_LOADING,
  SEARCH_COLLECTION_LOADING,
  WRITE_DOWN_ALL_COLLECTION,
  WRITE_DOWN_BOOKMARK_COLLECTION,
  WRITE_DOWN_COLLECTION, WRITE_DOWN_SEARCH_COLLECTION
} from "../../types";

const initialState = {
  myCollection: [],
  allCollection: [],
  bookmarkCollection: [],
  searchCollection: [],
  searchCollectionState: false,
  numberUserPublications: 0
}

export const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_DOWN_COLLECTION:
      return {...state, myCollection: [...action.payload], numberUserPublications: action.payload.length}
    case WRITE_DOWN_ALL_COLLECTION:
      return  {...state, allCollection: [...action.payload]}
    case WRITE_DOWN_BOOKMARK_COLLECTION:
      return {...state, bookmarkCollection: [...action.payload.data]}
    case WRITE_DOWN_SEARCH_COLLECTION:
      return {...state, searchCollection: [...action.payload.data]}
    case SEARCH_COLLECTION_LOADING:
      return {...state, searchCollectionState: true}
    case SEARCH_COLLECTION_HIDE_LOADING:
      return {...state, searchCollectionState: false}
    default:
      return state
  }
}
