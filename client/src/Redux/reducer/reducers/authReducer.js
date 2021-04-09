import {
  WRITE_REDUCER_TOKEN,
  LOGIN_AUTHENTICATION,
  LOGOUT,
  DELETE_BOOKMARK_UPDATE_STATE,
  ADD_BOOKMARK_UPDATE_STATE, CHECK_REGISTRATION, CHECK_REGISTRATION_RETURN_FALSE
} from '../../types'

function noop() {}

const initialState = {
  token: null,
  userId: null,
  userName: '',
  login: noop,
  logout: noop,
  isAuthenticated: false,
  bookmark: [],
  subscriptions: [],
  subscribers: [],
  ready: false,
  avatar: '',
  checkRegistration: false
}

// исправить вложенность
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_AUTHENTICATION:
      const {data} = action.payload
      console.log('data', data)
      return {...state,
                    token: data.token,
                    userId: data.userId ,
                    userName: data.userName,
                    bookmark: data.bookmark,
                    subscriptions: data.subscriptions,
                    subscribers: data.subscribers,
                    avatar: data.avatar,
                    isAuthenticated: true,
                    ready: true}

		case WRITE_REDUCER_TOKEN:
      return {...state,
                      token: action.payload.data.token,
                      userId: action.payload.data.userId ,
                      userName: action.payload.data.userName,
                      bookmark: action.payload.data.bookmark,
                      subscriptions: action.payload.data.subscriptions,
                      subscribers: action.payload.data.subscribers,
                      avatar: action.payload.data.avatar,
                      isAuthenticated: true,
                      ready: true}

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
