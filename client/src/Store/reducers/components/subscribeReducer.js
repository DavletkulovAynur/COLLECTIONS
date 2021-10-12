import {WRITE_DOWN_SUBSCRIBE_COLLECTION} from "../../types";

const initialState = {
    loader: false,
    subscribers: [],
    subscriptions: [],
}

export const LOADER_SUBSCRIBE = 'LOADER_SUBSCRIBE'
export const GET_ALL_SUBSCRIBE = 'GET_ALL_SUBSCRIBE'
export const GET_ALL_SUBSCRIBE_LOADER = 'GET_ALL_SUBSCRIBE_LOADER'


// TODO ERROR
export const subscribeReducer = (state = initialState, action) => {
    // data переделать
    switch (action.type) {
        case LOADER_SUBSCRIBE:
            return {...state, loader: action.payload}
        default:
            return {...state}
    }
}



// actions
export const loaderSubscribeAction = (payload) => ({type: LOADER_SUBSCRIBE, payload})
export const getAllSubscribeAction = (payload) => ({type: GET_ALL_SUBSCRIBE, payload})
export const getAllSubscribeLoaderAction = (payload) => ({type: GET_ALL_SUBSCRIBE_LOADER, payload})