

export const DELETE_COLLECTION = 'DELETE_COLLECTION'

const initialState = {

}

export function deleteCollectionReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_COLLECTION:
      return {...state}

    default:
      return {...state}
  }

}


export const  deleteCollectionAction = (payload) => ({type: DELETE_COLLECTION, payload})


