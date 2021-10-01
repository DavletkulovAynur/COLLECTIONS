import React from 'react'
import './UserInformation.scss'
import {API_URL} from "../../../config";

import {SubscribeTemplate} from "./templates/Subscribe.template";
import {DescriptionTemplate} from "./templates/Description.template";
import {PencilTemplate} from "./templates/Pencil.template";
import {UserNameTemplate} from "./templates/UserName.template";
import {AvatarTemplate} from "./templates/Avatar.template";
import {SubscribeButtonsTemplate} from "./templates/SubscribeButtons.template";

export const UserInformation = ({   unSubscribeOnUser,
                                    subscribeOnUser,
                                    user,
                                    guest = false,
                                    countPublication = '0'}) => {


  const {userName, avatar, userId, subscribers, subscriptions} = user
  const avatarUrl = avatar ? `${API_URL + '/avatars/' + avatar}` : false


  return (
      <div className='User-information User-information-root'>
          <section className='User-information__avatar-buttons-action'>
            <AvatarTemplate avatarUrl={avatarUrl}/>
            {guest
              ? <SubscribeButtonsTemplate subscriptions={subscriptions} userId={userId} subscribeOnUser={subscribeOnUser} unSubscribeOnUser={unSubscribeOnUser}/>
              : <PencilTemplate/>}
          </section>

          <section className='User-information__about'>
            <UserNameTemplate userName={userName}/>
            <SubscribeTemplate countPublication={countPublication} subscribers={subscribers} subscriptions={subscriptions}/>
            <DescriptionTemplate/>
          </section>
      </div>
    )
}