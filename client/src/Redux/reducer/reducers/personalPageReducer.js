import {PERSONAL_PAGE_AVATAR_POPUP} from "../../types";

const initialState = {
    statePopup: false
}

export const personalPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERSONAL_PAGE_AVATAR_POPUP:
            return {...state, statePopup: action.payload}
        default:
            return {...state}
    }
}