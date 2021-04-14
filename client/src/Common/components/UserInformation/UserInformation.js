import React, {useState} from 'react'
import PopupChangeAvatar from '../EditingProfile/EditingProfile'
import { IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';


import './UserInformation.scss'
import {useDispatch} from 'react-redux'
import {openPopupChangeAvatar, subscribeOnUserAction, unSubscribeOnUserAction} from '../../../Redux/actions/action'

export const UserInformation = ({   avatarUrl,
                                    userName,
                                    subscribers = [],
                                    mySubscriptions,
                                    subscriptions = [],
                                    userId,
                                    guest = false,
                                    countPublication = '0'}) => {

  const [openChangeAvatar, setOpenChangeAvatar] = useState(false)
  const dispatch = useDispatch()
  const changeStateAvatar = () => {
        setOpenChangeAvatar(true)
    }

  const editingProfile = () => {
    dispatch(openPopupChangeAvatar(true))
  }

    const button = () => {
      return (
        <div className='editing-profile'>
          <IconButton onClick={editingProfile} style={{background: '#fff'}}>
            <EditIcon fontSize='small'/>
          </IconButton>
        </div>
      )
    }


    return (
        <div className='User-information'>

            <div className='user'>
                <section className='right-block'>
                    <img src={avatarUrl} className='avatar'/>
                    {guest
                        ? <SubscribeButton userId={userId} mySubscriptions={mySubscriptions}/>
                        : button()}
                </section>

                <section className='left-block'>
                    <div className='user-name'>{userName}</div>

                    <div className='publication'>
                        <div className='item'>
                            <span>{countPublication}</span>
                            <span>публикаций</span>
                        </div>
                        <div className='item'>
                            <span>{subscribers.length}</span>
                            <span>Подписчики</span>
                        </div>
                        <div className='item'>
                            <span>{subscriptions.length}</span>
                            <div>Подписки</div>
                        </div>
                    </div>

                    <div className='about-user'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus debitis dolores eligendi esse ex, excepturi facilis harum incidunt molestias mollitia nostrum obcaecati, officia quas sequi suscipit temporibus tenetur, ullam?</p>
                    </div>
                    <div className='test'>
                      Moscow, Russia
                    </div>
                </section>
            </div>

            <PopupChangeAvatar openChangeAvatar={openChangeAvatar} changeStateAvatar={changeStateAvatar}/>

        </div>
    )
}

function SubscribeButton({userId, mySubscriptions}) {
    const dispatch = useDispatch()

    const subscribeOnUser = () => {
        dispatch(subscribeOnUserAction(userId))
    }

    const unSubscribeOnUser = () => {
        dispatch(unSubscribeOnUserAction(userId))
    }

    return (
        <>
            {mySubscriptions.includes(userId)
                ? <button onClick={unSubscribeOnUser}>ОТПИСКА</button>
                : <button onClick={subscribeOnUser}>ПОДПИСКА</button>
            }

        </>
    )
}