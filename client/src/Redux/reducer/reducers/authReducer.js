import {
    WRITE_REDUCER_TOKEN,
    LOGIN_AUTHENTICATION,
    LOGOUT,
    DELETE_BOOKMARK_UPDATE_STATE,
    ADD_BOOKMARK_UPDATE_STATE
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
  ready: false,
  avatar: ''
}

// исправить вложенность
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_AUTHENTICATION:
            console.log(action.payload)
            const {data} = action.payload
			return {...state,
                    token: data.token,
                    userId: data.userId ,
                    userName: data.userName,
                    bookmark: data.bookmark,
                    subscriptions: data.subscriptions,
                    avatar: data.avatar,
                    isAuthenticated: true,
                    ready: true}
		case WRITE_REDUCER_TOKEN:
		    console.log(action.payload)
		    return {...state,
                        token: action.payload.data.token,
                        userId: action.payload.data.userId ,
                        userName: action.payload.data.userName,
                        bookmark: action.payload.data.bookmark,
                        subscriptions: action.payload.data.subscriptions,
                        avatar: action.payload.data.avatar,
                        isAuthenticated: true,
                        ready: true}
        case DELETE_BOOKMARK_UPDATE_STATE:
            return {...state, bookmark: [...action.payload]}
        case ADD_BOOKMARK_UPDATE_STATE:
            return {...state, bookmark: [...action.payload]}
        case LOGOUT:
            return {...state, isAuthenticated: false, token: null, ready: true}

		default:
			return {...state}
	}
}
