import {WRITE_DOWN_SUBSCRIBE_COLLECTION} from "../../types";

const initialState = {
    subscribe: []
}

export const subscribeReducer = (state = initialState, action) => {
    // data переделать
    switch (action.type) {
        case WRITE_DOWN_SUBSCRIBE_COLLECTION:
            console.log(action.payload.data)
            return {...state, subscribe: [...action.payload.data.data]}
        default:
            return {...state}
    }
}