import React, {useState} from 'react'
import MenuListComposition from '../MenuListComposition/MenuListComposition'
import PopupChangeAvatar from '../PopupChangeAvatar/PopupChangeAvatar'
import PopupChangeUserInfo from '../PopupChangeUserInfo/PopupChangeUserInfo'

import './UserInformation.scss'
import {useDispatch} from 'react-redux'
import {getSubscribeCollectionAction, subscribeOnUserAction} from '../../../Redux/actions/action'

export const UserInformation = ({   avatarUrl,
                                    userName,
                                    subscriptions = 0,
                                    userId,
                                    guest = false,
                                    countPublication = '0'}) => {
    const dispatch = useDispatch()
    const [openChangeAvatar, setOpenChangeAvatar] = useState(false)

    const changeStateAvatar = () => {
        setOpenChangeAvatar(true)
    }

    const subscribeOnUser = () => {
        dispatch(subscribeOnUserAction(userId))
    }

    const getSubscribeCollection = () => {
        dispatch(getSubscribeCollectionAction(subscriptions))
    }

    return (
        <div className='User-information'>

            <div className='user'>
                <section className='right-block'>
                    <img src={avatarUrl} className='avatar'/>
                    {guest
                        ? <button onClick={subscribeOnUser}>ПОДПИСКА</button>
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
                            <button onClick={getSubscribeCollection}>GET_SUBSC</button>
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