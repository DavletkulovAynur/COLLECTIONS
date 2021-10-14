import {API_URL} from '../../config'
import defaultAvatar from '../assets/images/avatar-default.svg'


export function DefineAvatarUrl(authorAvatar) {
    if(!authorAvatar) {
        return defaultAvatar
    }
    return authorAvatar ? `${API_URL + 'avatars/' + authorAvatar}` : ''
}