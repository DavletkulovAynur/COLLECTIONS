import {
  WRITE_REDUCER_TOKEN,
  LOGIN_AUTHENTICATION,
  DELETE_BOOKMARK_UPDATE_STATE,
  ADD_BOOKMARK_UPDATE_STATE, CHECK_REGISTRATION, CHECK_REGISTRATION_RETURN_FALSE
} from '../../types'

export const LOAD_NEW_AVATAR = 'LOAD_NEW_AVATAR'

const initialState = {
  active: false,
  token: null,
  isAuthenticated: false,
  ready: false,
  checkRegistration: false,
  bookmark: [],
  owner: {
    subscribers: [],
    userId: null,
    userName: '',
    description: '',
    place: '',
    avatar: '',
    subscriptions: [],
  }
}

export const LOGOUT = 'LOGOUT'

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
	case LOAD_NEW_AVATAR: 
		return {...state, owner: {...state.owner, avatar: action.payload.data}}
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
          owner: {
            subscriptions,
            userId,
            userName,
            subscribers,
            avatar,
            description,
            place,
          },
  }
}


//actions
export const loadNewAvatarAction = (payload) => ({type: LOAD_NEW_AVATAR, payload})
export const logoutAction = (payload) => ({type: LOGOUT})