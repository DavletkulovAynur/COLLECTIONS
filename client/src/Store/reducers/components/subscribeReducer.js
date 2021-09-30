import {WRITE_DOWN_SUBSCRIBE_COLLECTION} from "../../types";

const initialState = {
    subscribe: []
}

// TODO ERROR
export const subscribeReducer = (state = initialState, action) => {
    // data переделать
    switch (action.type) {
        case WRITE_DOWN_SUBSCRIBE_COLLECTION:
            return {...state, subscribe: [...action.payload.data.data]}
        default:
            return {...state}
    }
}