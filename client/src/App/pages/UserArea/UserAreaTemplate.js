import React from 'react'
import {UserInformation} from "../../../Common/components/UserInformation/UserInformation";
import {API_URL} from '../../../config'

import './UserArea.scss'
const UserAreaTemplate = ({user, mySubscriptions}) => {
    const {username, avatar, _id, subscribers} = user
    const avatarUrl = avatar ? `${API_URL + '/avatars/' + avatar}` : false

    return (
        <div className='User-area'>
            <section className='user-information'>
                <UserInformation
                    subscribers={subscribers}
                    mySubscriptions={mySubscriptions}
                    avatarUrl={avatarUrl}
                    userId={_id}
                    userName={username}
                    guest='true'/>
            </section>
        </div>
    );
};

export default UserAreaTemplate;