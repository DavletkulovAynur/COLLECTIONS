import {APP_HIDE_LOADING, APP_LOADING} from '../../types'

const initialState = {
  loading: true
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING:
      return {loading: true}
    case APP_HIDE_LOADING:
      return {loading: false}
    default:
      return state
  }
}

