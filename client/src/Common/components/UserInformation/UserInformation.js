import React from 'react'
import './UserInformation.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {API_URL} from "../../../config";

export const UserInformation = ({   unSubscribeOnUser,
                                    subscribeOnUser,
                                    user,
                                    mySubscriptions,
                                    subscriptions = [],
                                    guest = false,
                                    countPublication = '0'}) => {


  const {userName, avatar, userId, subscribers} = user
  const avatarUrl = avatar ? `${API_URL + '/avatars/' + avatar}` : false
  const userEditPencil= () => {
    return (
      <Link className='User-information__pencil-edit' to='/personal-area/edit-user'>
        <FontAwesomeIcon icon='pencil-alt' color='#fff'/>
      </Link>
    )
  }

  const subscribeButton = () => {
    return (
      <>
        {mySubscriptions.includes(userId)
          ? <button onClick={unSubscribeOnUser}>ОТПИСКА</button>
          : <button onClick={subscribeOnUser}>ПОДПИСКА</button>
        }
      </>
    )
  }


    return (
        <div className='User-information'>

            <div className='User-information__box'>
                <section className='User-information__buttons-active'>
                    <img src={avatarUrl} className='User-information__avatar'/>
                    {guest
                        ? subscribeButton()
                        : userEditPencil()}
                </section>

                <section className='User-information__box-left-block'>
                    <div className='User-information__user-name'>{userName}</div>

                    <div className='User-information__publication-subscribe'>
                        <div className='User-information__publication-subscribe-item'>
                            <span>{countPublication}</span>
                            <span>публикаций</span>
                        </div>
                        <div className='User-information__publication-subscribe-item'>
                            <span>{subscribers.length}</span>
                            <span>Подписчики</span>
                        </div>
                        <div className='User-information__publication-subscribe-item'>
                            <span>{subscriptions.length}</span>
                            <div>Подписки</div>
                        </div>
                    </div>
                    <p className='User-information__description'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus debitis dolores eligendi esse ex, excepturi facilis harum incidunt molestias mollitia nostrum obcaecati, officia quas sequi suscipit temporibus tenetur, ullam?
                    </p>
                </section>
            </div>
        </div>
    )
}