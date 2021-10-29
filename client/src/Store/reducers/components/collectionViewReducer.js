import {
    LOADING_COLLECTION_UPDATE,
    WRITE_DOWN_COLLECTION_VIEW
} from '../../types'

const initialState = {
    collection: [],
    comments: [],
    loading: false,
    commentLoading: false,
    getCollectionLoading: false,
    removeCommentLoading: false,
    mainImg: '',
    owner: '',
    title: '',

}

export const UPDATE_COLLECTION_COMMENT = 'UPDATE_COLLECTION_COMMENT'
export const DELETE_COLLECTION_COMMENT = 'DELETE_COLLECTION_COMMENT'
export const SEND_COMMENT_LOADING = 'SEND_COMMENT_LOADING'
export const REMOVE_COMMENT_LOADING = 'REMOVE_COMMENT_LOADING'
export const WRITE_DOWN_COMMENTS = 'WRITE_DOWN_COMMENTS'
export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COLLECTION_LOADING = 'GET_COLLECTION_LOADING'


export const collectionViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_DOWN_COLLECTION_VIEW:
            const {data} = action.payload
            return {...state, collection: data[0], mainImg: data[0].mainImg, owner: data[0].owner, title: data[0].title}
        case UPDATE_COLLECTION_COMMENT:
            const comments = [...state.comments, action.payload.data]
            return {...state, comments}
        case DELETE_COLLECTION_COMMENT:
            return {...state, comments: action.payload.data}
        case SEND_COMMENT_LOADING:
            return {...state, commentLoading: action.payload}
        case REMOVE_COMMENT_LOADING:
            return {...state, removeCommentLoading: action.payload}
        case LOADING_COLLECTION_UPDATE:
            return {...state, loading: true}
        case WRITE_DOWN_COMMENTS:
            return {...state, comments: [...action.payload.data]}
        case GET_COLLECTION_LOADING:
            return {...state, getCollectionLoading: action.payload}
        default:
            return {...state}
    }
}

export const removeCommentLoadingAction = (payload) => ({type: REMOVE_COMMENT_LOADING, payload})
export const writeDownCommentsAction = (payload) => ({type: WRITE_DOWN_COMMENTS, payload})
export const getCommentsAction = (payload) => ({type: GET_COMMENTS, payload})
export const getCollectionLoadingAction = (payload) => ({type: GET_COLLECTION_LOADING, payload})
