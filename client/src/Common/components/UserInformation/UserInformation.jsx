import React from 'react'
import './UserInformation.scss'


import {SubscribeTemplate} from './templates/Subscribe.template'
import {DescriptionTemplate} from './templates/Description.template'
import {PencilTemplate} from './templates/Pencil.template'
import {UserNameTemplate} from './templates/UserName.template'
import {AvatarTemplate} from './templates/Avatar.template'
import {SubscribeButtonsTemplate} from './templates/SubscribeButtons.template'
import {DefineAvatarUrl} from '../../utils/DefineAvatarUrl'
import {useDispatch} from 'react-redux'
import {getAllSubscribeAction} from "../../../Store/reducers/components/subscribeReducer";


// TODO smart component
export const UserInformation = ({   unSubscribeOnUser,
                                    subscribeOnUser,
                                    user,
                                    guest = false,
                                    numberUserPublications = '0'}) => {

  const {userName, description, avatar, subscribers, subscriptions, userId} = user
  const avatarUrl = DefineAvatarUrl(avatar)
  const dispatch = useDispatch()

  function getAllSubscribe() {
    dispatch(getAllSubscribeAction({
      userId
    }))
  }

  return (
      <div className='User-information User-information-root'>
          <section className='User-information__avatar-buttons-action'>
            <AvatarTemplate avatarUrl={avatarUrl}/>
            {guest
              ? <SubscribeButtonsTemplate
                subscribers={subscribers}
                subscribeOnUser={subscribeOnUser}
                unSubscribeOnUser={unSubscribeOnUser}/>
              : <PencilTemplate/>
            }
          </section>

          <section className='User-information__about'>
            <UserNameTemplate userName={userName}/>
            <SubscribeTemplate getAllSubscribe={getAllSubscribe} numberUserPublications={numberUserPublications} subscribers={subscribers} subscriptions={subscriptions}/>
            {description
              ? <DescriptionTemplate description={description}/>
              : null
            }
          </section>
      </div>
    )
}