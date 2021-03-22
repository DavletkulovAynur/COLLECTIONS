import {WRITE_REDUCER_TOKEN, LOGIN_AUTHENTICATION, LOGOUT} from '../../types'

function noop() {}

const initialState = {
  token: null,
  userId: null,
  userName: '',
  login: noop,
  logout: noop,
  isAuthenticated: false,
  bookmark: [],
  ready: false,
  avatar: ''
}

// исправить вложенность
export const authReducer = (state = initialState, action) => {


	switch (action.type) {

		case LOGIN_AUTHENTICATION:
            const {data} = action.payload
			return {...state,
                    token: data.token,
                    userId: data.userId ,
                    userName: data.userName,
                    bookmark: data.bookmark,
                    avatar: data.avatar,
                    isAuthenticated: true,
                    ready: true}
		case WRITE_REDUCER_TOKEN:

            return {...state,
                        token: action.payload.data.token,
                        userId: action.payload.data.userId ,
                        userName: action.payload.data.userName,
                        bookmark: action.payload.data.bookmark,
                        avatar: action.payload.data.avatar,
                        isAuthenticated: true,
                        ready: true}
        case LOGOUT:
            return {...state, isAuthenticated: false, token: null, ready: true}

		default:
			return {...state}
	}
}
