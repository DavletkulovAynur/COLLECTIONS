import React from 'react'
import {UserInformation} from "../../../Common/components/UserInformation/UserInformation";
import {API_URL} from '../../../config'

import './UserArea.scss'
const UserAreaTemplate = ({user}) => {
    const {username, avatar} = user

    const avatarUrl = avatar ? `${API_URL + '/avatars/' + avatar}` : false

    return (
        <div className='User-area'>
            <section className='user-information'>
                <UserInformation avatarUrl={avatarUrl}  userName={username} guest='true'/>
            </section>
        </div>
    );
};

export default UserAreaTemplate;