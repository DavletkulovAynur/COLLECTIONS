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
    case EDIT_PROFILE_LOADING_COMPLETE:
      return {...state, profileLoading: false}
    case LOAD_AVATAR:
      return {...state, loading: true}
    case LOAD_AVATAR_COMPLETE:
      return {...state, loading: false}
    default:
      return {...state}
  }
}