import {FOLDER_STATE} from '../../types'

const initialState = {}

export const folderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLDER_STATE:
      console.log(action.payload)
      return {...state, ...action.payload}
    default:
      return {...state}
  }
}

