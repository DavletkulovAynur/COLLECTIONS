import {
  WRITE_REDUCER_TOKEN,
  LOGIN_AUTHENTICATION,
  LOGOUT,
  DELETE_BOOKMARK_UPDATE_STATE,
  ADD_BOOKMARK_UPDATE_STATE, CHECK_REGISTRATION, CHECK_REGISTRATION_RETURN_FALSE
} from '../../types'

const initialState = {
  token: null,
  userId: null,
  userName: '',
  isAuthenticated: false,
  bookmark: [],
  subscriptions: [],
  subscribers: [],
  ready: false,
  avatar: '',
  checkRegistration: false,
  description: '',
  place: ''
}

// исправить вложенность
export const authReducer = (state = initialState, action) => {
    console.log('test authReducer')
    switch (action.type) {
    case LOGIN_AUTHENTICATION:
      const {data} = action.payload

      return {...state,
                    active: data.active,
                    token: data.token,
                    userId: data.userId ,
                    userName: data.userName,
                    bookmark: data.bookmark,
                    subscriptions: data.subscriptions,
                    subscribers: data.subscribers,
                    avatar: data.avatar,
                    isAuthenticated: true,
                    ready: true,
                    description: data.description,
                    place: data.place
      }

		case WRITE_REDUCER_TOKEN:
      return {...state,
                      active: action.payload.data.active,
                      token: action.payload.data.token,
                      userId: action.payload.data.userId ,
                      userName: action.payload.data.userName,
                      bookmark: action.payload.data.bookmark,
                      subscriptions: action.payload.data.subscriptions,
                      subscribers: action.payload.data.subscribers,
                      avatar: action.payload.data.avatar,
                      isAuthenticated: true,
                      ready: true,
                      description: action.payload.data.description,
                      place: action.payload.data.place
      }

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
