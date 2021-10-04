import {useSelector} from 'react-redux'
import {API_URL} from '../../config'


export function DefineAvatarUrl(authorAvatar) {
    return authorAvatar ? `${API_URL + '/avatars/' + authorAvatar}` : ''
}