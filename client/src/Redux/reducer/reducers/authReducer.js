import {WRITE_REDUCER_TOKEN, LOGIN} from '../../types'

const initialState = {

}

export const authReducer = (state = initialState, action) => {
	switch (action.type){
		case LOGIN:
			return {...state}
		case WRITE_REDUCER_TOKEN:
			console.log('super')
			return {...state}
		default:
			return {...state}
	}
}