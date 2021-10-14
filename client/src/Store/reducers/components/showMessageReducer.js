const initialState = {
  showMessage: false,
  text: '',
  severity: ''
}

export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const REMOVE_SHOW_MESSAGE = 'REMOVE_SHOW_MESSAGE'

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

export const showMessageAction = (payload) => ({type: SHOW_MESSAGE, payload})
export const removeShowMessageAction = (payload) => ({type: REMOVE_SHOW_MESSAGE, payload})