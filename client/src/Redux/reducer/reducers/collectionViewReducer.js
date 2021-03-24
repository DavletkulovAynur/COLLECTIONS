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
            return {...state, collection: [...data.collection], comments: data.collection[0].comments}
        case UPDATE_COLLECTION_VIEW:
            const test = [...state.collection[0].comments, action.payload.data.commentObj]
            return {...state, comments: test}
        case LOADING_COLLECTION_UPDATE:
            return {...state, loading: true}
        case LOADING_HIDDEN_COLLECTION_UPDATE:
            return {...state, loading: false}
        default:
            return {...state}
    }
}