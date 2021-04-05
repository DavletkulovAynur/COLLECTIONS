import {REMOVE_SHOW_MESSAGE, SHOW_MESSAGE} from "../../types";

const initialState = {
  showMessage: false,
  text: '',
  severity: ''
}

export const showMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {...state,
              showMessage: true,
              text: `${action.payload.text}`,
              severity: `${action.payload.severity}`}
    case REMOVE_SHOW_MESSAGE:
      return {...state, showMessage: false}
    default:
      return {...state}
  }
}