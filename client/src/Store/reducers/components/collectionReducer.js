import {
  SEARCH_COLLECTION_HIDE_LOADING,
  SEARCH_COLLECTION_LOADING,
  WRITE_DOWN_ALL_COLLECTION,
  WRITE_DOWN_BOOKMARK_COLLECTION,
  WRITE_DOWN_COLLECTION, WRITE_DOWN_SEARCH_COLLECTION
} from "../../types";

const COLLECTION_LOADER = 'COLLECTION_LOADER'

// TODO ошибка в том что (загрузка всегда true)
const initialState = {
  myCollection: [],
  allCollection: [],
  subscriptionsCollection: [],
  bookmarkCollection: [],
  searchCollection: [],
  searchCollectionState: false,
  numberUserPublications: 0,
  collectionLoader: true

}

const WRITE_DOWN_SUBSCRIBE_COLLECTION = 'WRITE_DOWN_SUBSCRIBE_COLLECTION'
export const GET_SUBSCRIBE_COLLECTION = 'GET_SUBSCRIBE_COLLECTION'
const UPDATE_ADD_COLLECTION = 'UPDATE_ADD_COLLECTION'

export const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_DOWN_COLLECTION:
      return {...state, myCollection: [...action.payload], numberUserPublications: action.payload.length}
    case WRITE_DOWN_ALL_COLLECTION:
      return  {...state, allCollection: [...action.payload]}
    case WRITE_DOWN_BOOKMARK_COLLECTION:
      return {...state, bookmarkCollection: [...action.payload.data]}
    case WRITE_DOWN_SEARCH_COLLECTION:
      return {...state, searchCollection: [...action.payload.data]}
    case SEARCH_COLLECTION_LOADING:
      return {...state, searchCollectionState: true}
    case SEARCH_COLLECTION_HIDE_LOADING:
      return {...state, searchCollectionState: false}
    case COLLECTION_LOADER:
      return {...state, collectionLoader: action.payload}

    case WRITE_DOWN_SUBSCRIBE_COLLECTION:
      return {...state, subscriptionsCollection: action.payload.data}

    case UPDATE_ADD_COLLECTION:
		console.log(action.payload.data)
        return {...state, 
			myCollection: [action.payload.data, ...state.myCollection, ],
			allCollection: [action.payload.data, ...state.allCollection],
		}

    default:
      return state
  }
}

export const collectionLoaderAction = (payload) => ({type: COLLECTION_LOADER, payload})
export const getSubscribeCollectionAction = (payload) => ({type: GET_SUBSCRIBE_COLLECTION, payload})
export const writeDownSubscribeCollectionAction = (payload) => ({type: WRITE_DOWN_SUBSCRIBE_COLLECTION, payload})
export const updateAddCollectionAction = (payload) => ({type: UPDATE_ADD_COLLECTION, payload})
