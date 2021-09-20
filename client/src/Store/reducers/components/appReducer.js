import {
  APP_ALERT_HIDDEN,
  APP_ALERT_SHOW,
  APP_ERROR,
  APP_HIDE_LOADING,
  APP_LOADING,
} from '../../types'

const initialState = {
  loading: true,
  alert: false,
  error: false,
  addBookmark: false
}

export const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case APP_LOADING:
      return {...state, loading: true}
    case APP_HIDE_LOADING:
      return {...state, loading: false}
    case APP_ALERT_SHOW:
      return {...state, alert: true}
    case APP_ALERT_HIDDEN:
      return {...state, alert: false}
    case APP_ERROR:
      return {...state, error: true}
    default:
      return state
  }
}

