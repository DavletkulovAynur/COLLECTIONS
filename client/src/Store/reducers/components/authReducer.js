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
	subscriptions: [],
    userId: null,
    userName: '',
    description: '',
    place: '',
    avatar: '',
  }
}

export const LOGOUT = 'LOGOUT'
const UNSUBSCRIBE_CHANGE_OWNER = 'UNSUBSCRIBE_FROM_THIS_USER'
const UPDATE_OWNER_INFORMATION = 'UPDATE_OWNER_INFORMATION'

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

	case UNSUBSCRIBE_CHANGE_OWNER:
		return {...state, owner: {...state.owner, subscriptions: state.owner.subscribers.filter(item => item === action.payload.subscribeUserId)}}

  case UPDATE_OWNER_INFORMATION:
		return {...state, owner: {...state.owner, userName: action.payload.username, description: action.payload.description,}}

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
export const unsubscribeChangeOwnerAction = (payload) => ({type: UNSUBSCRIBE_CHANGE_OWNER, payload})
export const updateOwnerInformationAction = (payload) => ({type: UPDATE_OWNER_INFORMATION, payload})