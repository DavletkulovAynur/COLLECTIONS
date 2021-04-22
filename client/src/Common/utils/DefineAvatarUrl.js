import {useSelector} from 'react-redux'
import {API_URL} from '../../config'


export function DefineAvatarUrl() {
    const {avatar} = useSelector((state) => state.authReducer)
    return avatar ? `${API_URL + '/avatars/' + avatar}` : false
}