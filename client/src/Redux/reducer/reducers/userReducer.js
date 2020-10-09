import {USER_NAME} from "Redux/types";

const initialState = {
  username: ''
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_NAME:
      const username = action.payload
      return {...state, username}
    default:
      return state
  }
}
