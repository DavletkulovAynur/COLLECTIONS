import {
    LOADING_COLLECTION_UPDATE,
    LOADING_HIDDEN_COLLECTION_UPDATE,
    UPDATE_COLLECTION_VIEW,
    WRITE_DOWN_COLLECTION_VIEW
} from '../../types'

const initialState = {
    collection: [],
    comments: [],
    loading: false
}

export const collectionViewReducer = (state = initialState, action) => {

    switch (action.type) {
        case WRITE_DOWN_COLLECTION_VIEW:
            const {data} = action.payload
            return {...state, collection: data[0], comments: data[0].comments}
            break
        case UPDATE_COLLECTION_VIEW:
            const test = [...state.collection.comments, action.payload.data]
            return {...state, comments: test}
            break
        case LOADING_COLLECTION_UPDATE:
            return {...state, loading: true}
            break
        case LOADING_HIDDEN_COLLECTION_UPDATE:
            return {...state, loading: false}
            break
        default:
            return {...state}
    }
}