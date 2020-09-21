import {WRITE_DOWN_GAMES} from '../../types'
const initialState = []

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_DOWN_GAMES:
      return [...action.payload]
    default:
      return state
  }
}
