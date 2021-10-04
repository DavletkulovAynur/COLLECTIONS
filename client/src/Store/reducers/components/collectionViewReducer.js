import {
    LOADING_COLLECTION_UPDATE,
    LOADING_HIDDEN_COLLECTION_UPDATE,

    WRITE_DOWN_COLLECTION_VIEW
} from '../../types'

const initialState = {
    collection: [],
    comments: [],
    loading: false,
    commentLoading: false,
    removeCommentLoading: false,
    mainImg: '',
    owner: '',
    title: ''
}



export const collectionViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_DOWN_COLLECTION_VIEW:
            const {data} = action.payload
            return {...state, collection: data[0], comments: data[0].comments, mainImg: data[0].mainImg, owner: data[0].owner, title: data[0].title}
        case UPDATE_COLLECTION_COMMENT:
            const comments = [...state.comments, action.payload.data]
            return {...state, comments}
        case DELETE_COLLECTION_COMMENT:
            // TODO, сделать удаление только одного комментария
            return {...state, comments: action.payload.data}
        case SEND_COMMENT_LOADING:
            return {...state, commentLoading: action.payload}
        case REMOVE_COMMENT_LOADING:
            return {...state, removeCommentLoading: action.payload}
        case LOADING_COLLECTION_UPDATE:
            return {...state, loading: true}
        case LOADING_HIDDEN_COLLECTION_UPDATE:
            return {...state, loading: false}
        default:
            return {...state}
    }
}

export const UPDATE_COLLECTION_COMMENT = 'UPDATE_COLLECTION_COMMENT'
export const DELETE_COLLECTION_COMMENT = 'DELETE_COLLECTION_COMMENT'
export const SEND_COMMENT_LOADING = 'SEND_COMMENT_LOADING'
export const REMOVE_COMMENT_LOADING = 'REMOVE_COMMENT_LOADING'