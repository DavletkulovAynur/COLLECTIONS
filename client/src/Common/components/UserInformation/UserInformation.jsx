import React from 'react'
import './UserInformation.scss'
import {API_URL} from "../../../config";

import {SubscribeTemplate} from "./templates/Subscribe.template";
import {DescriptionTemplate} from "./templates/Description.template";
import {PencilTemplate} from "./templates/Pencil.template";
import {UserNameTemplate} from "./templates/UserName.template";
import {AvatarTemplate} from "./templates/Avatar.template";
import {SubscribeButtonsTemplate} from "./templates/SubscribeButtons.template";
import {DefineAvatarUrl} from "../../utils/DefineAvatarUrl";

export const UserInformation = ({   unSubscribeOnUser,
                                    subscribeOnUser,
                                    user,
                                    guest = false,
                                    numberUserPublications = '0'}) => {


  const {userName, description, avatar, userId, subscribers, subscriptions} = user
  const avatarUrl = DefineAvatarUrl(avatar)


  return (
      <div className='User-information User-information-root'>
          <section className='User-information__avatar-buttons-action'>
            <AvatarTemplate avatarUrl={avatarUrl}/>
            {guest
              ? <SubscribeButtonsTemplate subscriptions={subscriptions} userId={userId} subscribeOnUser={subscribeOnUser} unSubscribeOnUser={unSubscribeOnUser}/>
              : <PencilTemplate/>
            }
          </section>

          <section className='User-information__about'>
            <UserNameTemplate userName={userName}/>
            <SubscribeTemplate numberUserPublications={numberUserPublications} subscribers={subscribers} subscriptions={subscriptions}/>
            {description
              ? <DescriptionTemplate description={description}/>
              : null
            }
          </section>
      </div>
    )
}