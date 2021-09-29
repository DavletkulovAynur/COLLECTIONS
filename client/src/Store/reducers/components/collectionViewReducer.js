import {
    LOADING_COLLECTION_UPDATE,
    LOADING_HIDDEN_COLLECTION_UPDATE,
    UPDATE_COLLECTION_VIEW,
    WRITE_DOWN_COLLECTION_VIEW
} from '../../types'

const initialState = {
    collection: [],
    comments: [],
    loading: false,
    mainImg: '',
    owner: '',
    title: ''
}

export const collectionViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_DOWN_COLLECTION_VIEW:
            const {data} = action.payload
            return {...state, collection: data[0], comments: data[0].comments, mainImg: data[0].mainImg, owner: data[0].owner, title: data[0].title}
        case UPDATE_COLLECTION_VIEW:
            const test = [...state.collection.comments, action.payload.data]
            return {...state, comments: test}
        case LOADING_COLLECTION_UPDATE:
            return {...state, loading: true}
        case LOADING_HIDDEN_COLLECTION_UPDATE:
            return {...state, loading: false}
        default:
            return {...state}
    }
}