
const initialState = {
  statePopUp: false,
  idCollection: null,
  ownerCard: false
}

export const CHANGE_STATE_POPUP = 'CHANGE_STATE_POPUP'

export function PopUpCardReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATE_POPUP:
      const {statePopUp, idCollection, ownerCard} = action.payload
      return {...state, statePopUp, idCollection, ownerCard}
    default:
      return {...state}
  }
}

export const changeStatePopupAction = (payload) => ({type: CHANGE_STATE_POPUP, payload})

