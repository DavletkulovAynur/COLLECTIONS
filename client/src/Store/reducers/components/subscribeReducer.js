import {WRITE_DOWN_SUBSCRIBE_COLLECTION} from "../../types";

const initialState = {
    subscribe: [],
    loader: false,
}

// TODO ERROR
export const subscribeReducer = (state = initialState, action) => {
    // data переделать
    switch (action.type) {
        case WRITE_DOWN_SUBSCRIBE_COLLECTION:
            return {...state, subscribe: [...action.payload.data.data]}
        case LOADER_SUBSCRIBE:
            return {...state, loader: action.payload}
        default:
            return {...state}
    }
}

export const LOADER_SUBSCRIBE = 'LOADER_SUBSCRIBE'

// actions
export const loaderSubscribeAction = (payload) => ({type: LOADER_SUBSCRIBE, payload})