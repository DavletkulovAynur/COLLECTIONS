import {WRITE_DOWN_GET_USER} from "../../types";

const initialState = {
    user: null
}

export const userAreaPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_DOWN_GET_USER:
            return {...state, user: action.payload.data.data[0]}
        default:
            return {...state}
    }
}