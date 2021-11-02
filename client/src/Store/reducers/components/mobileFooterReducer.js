
const initialState = {
    hiddenMobileFooter: false,
}

const HIDDEN_MOBILE_FOOTER_CHANGE = 'HIDDEN_MOBILE_FOOTER_CHANGE'

export const mobileFooterReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIDDEN_MOBILE_FOOTER_CHANGE:
            return {...state, hiddenMobileFooter: action.payload}

        default:
            return {...state}
    }
}

export const hiddenMobileFooterChangeAction = (payload) => ({type: HIDDEN_MOBILE_FOOTER_CHANGE, payload})