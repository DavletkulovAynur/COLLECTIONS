import {LOAD_AVATAR, LOAD_AVATAR_COMPLETE, PERSONAL_PAGE_AVATAR_POPUP} from "../../types";

const initialState = {
  statePopup: false,
  loading: false
}

export const personalPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSONAL_PAGE_AVATAR_POPUP:
      return {...state, statePopup: action.payload}
      break
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