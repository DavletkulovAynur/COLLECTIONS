
const initialState = {
  statePopUp: false,
  idCollection: null
}

const CHANGE_STATE_POPUP = 'CHANGE_STATE_POPUP'

export function PopUpCardReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATE_POPUP:
      const {statePopUp, idCollection} = action.payload
      return {...state, statePopUp, idCollection}
    default:
      return {...state}
  }
}

export const changeStatePopupAction = (payload) => ({type: CHANGE_STATE_POPUP, payload})

