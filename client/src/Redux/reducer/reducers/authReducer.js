export const LOGIN_AUTH = 'LOGIN_AUTH'
export const CHECK_AUTH = 'LOGIN_AUTH'

export const SET_USER = 'SET_USER'



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
	switch (action.type) {
		case  'SET_USER':
			const {token, userId, userName, bookmark, email} = action.payload

			return {...state,

				ready: true
			}
		default:
			return state
	}
}