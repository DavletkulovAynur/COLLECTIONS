import {WRITE_REDUCER_TOKEN, LOGIN_AUTHENTICATION} from '../../types'

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
  avatar: {}
}

// подумать над actions
export const authReducer = (state = initialState, action) => {
	switch (action.type){
		case LOGIN_AUTHENTICATION:
			return {...state,
        token: action.payload.token,
        userId: action.payload.userId ,
        userName: action.payload.userName,
        bookmark: action.payload.bookmark,
        avatar: action.payload.avatar,
        ready: true}
		case WRITE_REDUCER_TOKEN:
      const {token, userId, userName, bookmark, avatar} = action.payload
			return {...state, token, userId, userName, bookmark, avatar, ready: true}
		default:
			return {...state}
	}
}
