import {
    LOAD_IMG_DRAG_AND_DROP,
    SEND_COLLECTION_IMG_ERROR,
    SEND_COLLECTION_LOAD, 
    SEND_COLLECTION_PREVIEW_IMG,
    SUCCESSFULLY_SEND_COLLECTION
} from '../../types'

const initialState = {
    errorFiles: false,
    fileImg: null,
    load: false,
    previewImg: null
}

export const addCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_COLLECTION_IMG_ERROR:
            return {...state, errorFiles: action.payload}
      
        case SEND_COLLECTION_LOAD:
            return {...state, load: true}
        case SUCCESSFULLY_SEND_COLLECTION:
            return {...state, fileImg: null, previewImg: null, load: false, errorFiles: false}
        case SEND_COLLECTION_PREVIEW_IMG:
            return {...state, previewImg: action.payload.reader,  fileImg: action.payload.file}
        default:
            return state
    }
}

export const sendCollectionImgErrorAction = (payload) => ({type: SEND_COLLECTION_IMG_ERROR, payload})
export const sendCollectionPreviewImg = (payload) => ({type: SEND_COLLECTION_PREVIEW_IMG, payload})