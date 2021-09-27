import {
  WRITE_REDUCER_TOKEN,
  LOGIN_AUTHENTICATION,
  LOGOUT,
  DELETE_BOOKMARK_UPDATE_STATE,
  ADD_BOOKMARK_UPDATE_STATE, CHECK_REGISTRATION, CHECK_REGISTRATION_RETURN_FALSE
} from '../../types'

const initialState = {
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

// TODO исправить вложенность
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_AUTHENTICATION:
      const {data} = action.payload

      return {...state, active: data.active, token: data.token, isAuthenticated: true, ready: true, bookmark: data.bookmark, subscriptions: data.subscriptions,
                    user: {
                      userId: data.userId ,
                      userName: data.userName,
                      subscribers: data.subscribers,
                      avatar: data.avatar,
                      description: data.description,
                      place: data.place
                    },

      }

		case WRITE_REDUCER_TOKEN:
      return {...state, active: action.payload.data.active, token: action.payload.data.token, bookmark: action.payload.data.bookmark, isAuthenticated: true, ready: true, subscriptions: action.payload.data.subscriptions,
                      user: {
                        userId: action.payload.data.userId ,
                        userName: action.payload.data.userName,
                        subscribers: action.payload.data.subscribers,
                        avatar: action.payload.data.avatar,
                        description: action.payload.data.description,
                        place: action.payload.data.place
                      },
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
