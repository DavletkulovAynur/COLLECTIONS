import {LOAD_AVATAR, LOAD_AVATAR_COMPLETE} from "../../types";

const initialState = {
  statePopup: false,
  loading: false
}

export const personalPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AVATAR:
      return {...state, loading: true}
      break
    case LOAD_AVATAR_COMPLETE:
      return {...state, loading: false}
      break
    default:
      return {...state}
  }
}