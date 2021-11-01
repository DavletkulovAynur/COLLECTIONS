
const initialState = {
    statePopupAlert: false,
    text: '',
    fn: () => {},
}

const POPUP_ALERT_OPEN = 'POPUP_ALERT_OPEN'

export const popupAlertReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case POPUP_ALERT_OPEN:
            const {text = '', fn = () => {}, statePopupAlert} = action.payload
            return {...state, statePopupAlert, text, fn}

        default:
            return {...state}
    }
}

export const popupAlertOpenAction = (payload) => ({type: POPUP_ALERT_OPEN, payload})