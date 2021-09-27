import {useSelector} from 'react-redux'
import {API_URL} from '../../config'


export function DefineAvatarUrl() {
    const {user} = useSelector((state) => state.authReducer)
    const {avatar} = user
    return avatar ? `${API_URL + '/avatars/' + avatar}` : false
}