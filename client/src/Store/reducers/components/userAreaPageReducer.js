import {WRITE_DOWN_GET_USER, WRITE_DOWN_USER_COLLECTION} from "../../types";


const initialState = {
    user: null,
    userCollection: [],
    countUserCollection: 0
}

export const userAreaPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_DOWN_GET_USER:
            return {...state, user: action.payload.data}
        case WRITE_DOWN_USER_COLLECTION:
            return {...state, userCollection: action.payload.data, countUserCollection: action.payload.data.length}
        case SUBSCRIBE_FROM_THIS_USER:
            return {...state, user: {
                    ...state.user,
                    subscribers: [...state.user.subscribers, action.payload]
                }}
        case UNSUBSCRIBE_FROM_THIS_USER:
            return {...state, user: {
                    ...state.user,
                    subscribers: state.user.subscribers.filter(item => item === action.payload.subscribeUserId)
                }}
        default:
            return {...state}
    }
}

const UNSUBSCRIBE_FROM_THIS_USER = 'UNSUBSCRIBE_FROM_THIS_USER'
const SUBSCRIBE_FROM_THIS_USER = 'SUBSCRIBE_FROM_THIS_USER'

export const unSubscribeFromThisUserAction = (payload) => ({type: UNSUBSCRIBE_FROM_THIS_USER, payload})
export const subscribeFromThisUserAction = (payload) => ({type: SUBSCRIBE_FROM_THIS_USER, payload})

