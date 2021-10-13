const initialState = {
    loader: false,
    onlySubscribers: [],
    onlySubscriptions: [],
    getSubscribeLoader: false
}

export const LOADER_SUBSCRIBE = 'LOADER_SUBSCRIBE'
export const GET_ALL_SUBSCRIBE = 'GET_ALL_SUBSCRIBE'
export const GET_ALL_SUBSCRIBE_LOADER = 'GET_ALL_SUBSCRIBE_LOADER'
export const WRITE_DOWN_FULL_INFO_SUBSCRIBE_USER = 'WRITE_DOWN_FULL_INFO_SUBSCRIBE_USER'


// TODO ERROR
export const subscribeReducer = (state = initialState, action) => {
    // data переделать
    switch (action.type) {
        case LOADER_SUBSCRIBE:
            return {...state, loader: action.payload}
        case GET_ALL_SUBSCRIBE_LOADER:
            return {...state, getSubscribeLoader: action.payload}
        case WRITE_DOWN_FULL_INFO_SUBSCRIBE_USER:
            const {onlySubscribers, onlySubscriptions} = action.payload
            console.log(onlySubscribers, onlySubscriptions)
            return {...state, onlySubscribers, onlySubscriptions}
        default:
            return {...state}
    }
}



// actions
export const loaderSubscribeAction = (payload) => ({type: LOADER_SUBSCRIBE, payload})
export const getAllSubscribeAction = (payload) => ({type: GET_ALL_SUBSCRIBE, payload})
export const getAllSubscribeLoaderAction = (payload) => ({type: GET_ALL_SUBSCRIBE_LOADER, payload})
export const writeDownFullInfoSubscribeUser = (payload) => ({type: WRITE_DOWN_FULL_INFO_SUBSCRIBE_USER, payload})