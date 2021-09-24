import {EDIT_PROFILE_LOADING, EDIT_PROFILE_LOADING_COMPLETE, LOAD_AVATAR, LOAD_AVATAR_COMPLETE} from "../../types";

const initialState = {
  statePopup: false,
  loading: false,
  profileLoading: false
}

export const userEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE_LOADING:
      return {...state, profileLoading: true}
      break
    case EDIT_PROFILE_LOADING_COMPLETE:
      return {...state, profileLoading: false}
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