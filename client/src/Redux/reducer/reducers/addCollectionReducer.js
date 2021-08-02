import {DISPATCH_COLLECTION, LOAD_IMG_DRAG_AND_DROP, SUCCESSFULLY_SEND_COLLECTION} from "../../types";

const initialState = {
    errorTitle: false,
    errorFiles: false,
    mainImg: null,
    sendCollectionStatus: false
}

export const addCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPATCH_COLLECTION:
            const {errorTitle, errorFiles} = action.payload
            return {...state, errorTitle, errorFiles}
            break
        case LOAD_IMG_DRAG_AND_DROP:
            const {mainImg} = action.payload
            return {...state, mainImg, errorFiles: false}
            break
        case SUCCESSFULLY_SEND_COLLECTION:
           const {status} = action.payload
            return {...state, sendCollectionStatus: status, mainImg: null}
        default:
            return state
    }
}