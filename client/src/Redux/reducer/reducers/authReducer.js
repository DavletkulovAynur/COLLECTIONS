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
  ready: false
}

export const authReducer = (state = initialState, action) => {
	switch (action.type){
		case LOGIN_AUTHENTICATION:
      const {token, userId, userName, bookmark} = action.payload
      console.log(action.payload)
			return {...state, token, userId, userName, bookmark, ready: true}
		case WRITE_REDUCER_TOKEN:
			console.log('WRITE_REDUCER_TOKEN')
			return {...state, ready: true}
		default:
			return {...state}
	}
}
