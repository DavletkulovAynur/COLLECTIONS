

export const DELETE_COLLECTION = 'DELETE_COLLECTION'
export const DELETE_COLLECTION_LOADING = 'DELETE_COLLECTION_LOADING'

const initialState = {
  deleteLoading: false
}

export function deleteCollectionReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_COLLECTION:
      return {...state}
    case DELETE_COLLECTION_LOADING:
      return {...state, deleteLoading: action.payload}
    default:
      return {...state}
  }

}


export const  deleteCollectionAction = (payload) => ({type: DELETE_COLLECTION, payload})
export const deleteCollectionLoadingAction = (payload) => ({type: DELETE_COLLECTION_LOADING, payload})


