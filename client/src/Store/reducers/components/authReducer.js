import {
  WRITE_REDUCER_TOKEN,
  LOGIN_AUTHENTICATION,
  LOGOUT,
  DELETE_BOOKMARK_UPDATE_STATE,
  ADD_BOOKMARK_UPDATE_STATE, CHECK_REGISTRATION, CHECK_REGISTRATION_RETURN_FALSE
} from '../../types'

const initialState = {
  active: false,
  token: null,
  isAuthenticated: false,
  ready: false,
  checkRegistration: false,
  bookmark: [],
  subscriptions: [],
  user: {
    subscribers: [],
    userId: null,
    userName: '',
    description: '',
    place: '',
    avatar: '',
  }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_AUTHENTICATION:
      return authenticationInformationUser(action.payload.data, state)
    case WRITE_REDUCER_TOKEN:
      return authenticationInformationUser(action.payload.data, state)
    case DELETE_BOOKMARK_UPDATE_STATE:
      return {...state, bookmark: [...action.payload]}
    case ADD_BOOKMARK_UPDATE_STATE:
      return {...state, bookmark: [...action.payload]}
    case LOGOUT:
      return {...state, isAuthenticated: false, token: null, ready: true}
    case CHECK_REGISTRATION:
      return {...state, checkRegistration: true}
    case CHECK_REGISTRATION_RETURN_FALSE:
      return {...state, checkRegistration: false}
    default:
			return {...state}
	}
}

function authenticationInformationUser(data, state) {
  const {active, token, bookmark, subscriptions, userId, userName, subscribers, avatar, description, place} = data

  return {...state,
          isAuthenticated: true,
          ready: true,
          active,
          token,
          bookmark,
          subscriptions,
          user: {
            userId,
            userName,
            subscribers,
            avatar,
            description,
            place
          },
  }
}