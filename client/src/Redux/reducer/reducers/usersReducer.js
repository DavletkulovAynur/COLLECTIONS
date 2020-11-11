import {WRITE_DOWN_ALL_USERS} from "Redux/types";

const initialState = []

export const usersReducer = (state = initialState, action) => {
  console.log('userReducer')
  switch (action.type) {
    case  WRITE_DOWN_ALL_USERS:
      return [...action.payload]
    default:
      return state
  }
}
