import {WRITE_DOWN_ALL_COLLECTION, WRITE_DOWN_COLLECTION} from "Redux/types";

const initialState = {
  myCollection: [],
  allCollection: []
}

export const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_DOWN_COLLECTION:
      return {...state, myCollection: [...action.payload]}
    case WRITE_DOWN_ALL_COLLECTION:
      return  {...state, allCollection: [...action.payload]}
    default:
      return state
  }
}
