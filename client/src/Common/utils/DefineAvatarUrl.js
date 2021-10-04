import {useSelector} from 'react-redux'
import {API_URL} from '../../config'


export function DefineAvatarUrl(authorAvatar) {
    const {owner} = useSelector((state) => state.authReducer)
    const {avatar} = owner
    return avatar ? `${API_URL + '/avatars/' + authorAvatar || avatar}` : false
}