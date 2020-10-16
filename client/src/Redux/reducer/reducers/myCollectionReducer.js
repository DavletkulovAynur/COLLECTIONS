import {WRITE_DOWN_COLLECTION} from "Redux/types";

const initialState = []

export const myCollectionReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case WRITE_DOWN_COLLECTION:
      return [...action.payload]
    default:
      return state
  }
}
