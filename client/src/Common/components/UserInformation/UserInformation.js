import React, {useState} from 'react'
import MenuListComposition from '../MenuListComposition/MenuListComposition'
import PopupChangeAvatar from '../PopupChangeAvatar/PopupChangeAvatar'
import PopupChangeUserInfo from '../PopupChangeUserInfo/PopupChangeUserInfo'

import './UserInformation.scss'
import {useDispatch} from 'react-redux'
import {subscribeOnUserAction, unSubscribeOnUserAction} from '../../../Redux/actions/action'

export const UserInformation = ({   avatarUrl,
                                    userName,
                                    subscribe,
                                    mySubscriptions,
                                    subscriptions = [],
                                    userId,
                                    guest = false,
                                    countPublication = '0'}) => {

    const [openChangeAvatar, setOpenChangeAvatar] = useState(false)

    console.log(mySubscriptions)
    const changeStateAvatar = () => {
        setOpenChangeAvatar(true)
    }



    return (
        <div className='User-information'>

            <div className='user'>
                <section className='right-block'>
                    <img src={avatarUrl} className='avatar'/>
                    {guest
                        ? <SubscribeButton userId={userId} mySubscriptions={mySubscriptions}/>
                        : <MenuListComposition changeStateAvatar={changeStateAvatar}/>}
                </section>

                <section className='left-block'>
                    <div className='user-name'>{userName}</div>

                    <div className='publication'>
                        <div className='item'>
                            <span>{countPublication}</span>
                            <span>публикаций</span>
                        </div>
                        <div className='item'>
                            <span>{subscriptions.length}</span>
                            <span>Подписчики</span>
                        </div>
                        <div className='item'>
                            <span>209</span>
                            <div>Подписки</div>
                        </div>
                    </div>

                    <div className='about-user'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus debitis dolores eligendi esse ex, excepturi facilis harum incidunt molestias mollitia nostrum obcaecati, officia quas sequi suscipit temporibus tenetur, ullam?</p>
                    </div>
                </section>
            </div>

            <PopupChangeAvatar openChangeAvatar={openChangeAvatar} changeStateAvatar={changeStateAvatar}/>
            <PopupChangeUserInfo/>

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