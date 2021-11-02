import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {DefineAvatarUrl} from "../../../utils/DefineAvatarUrl";
import {Shruggie} from "../../Shruggie/Shruggie";

// TODO ошибки в именах
export function SubscribePopupUsers({ statePopup,
                                      closePopup,
                                      changeSubscribeValue,
                                      typeSubscribeValue}) {

  const {onlySubscribers, onlySubscriptions, getSubscribeLoader} = useSelector(state => state.subscribeReducer)

  function changeStateSubscribe(value) {
    changeSubscribeValue(value)
  }

  function arrSubscribe(arr) {
    if(!arr.length) {
      return <Shruggie/>
    }

    return (
      <ul className='User-information__popup-users'>
        {arr.map((item, index) => {
          const avatarUrl = DefineAvatarUrl(item.avatar)
          return (
            <Link to={'/'}>
              <li className='User-information__popup-user' key={index}>
                <img className='User-information__popup-user-avatar' src={avatarUrl}/>
                <span className='User-information__popup-user-name'>{item.username}</span>
              </li>
            </Link>
          )
        })}
      </ul>
    )
  }

  return (
    <Popup open={statePopup} onClose={closePopup} className='User-information__subscribe-popup'>
      <div className='User-information__subscribe-popup'>
        <section className='User-information__subscribe-popup-header'>
          <div onClick={() => changeStateSubscribe('subscribers')}  className={`User-information__subscribe-popup-header-button 
                          User-information__subscribe-popup-header-button_${ typeSubscribeValue === 'subscribers' ? 'active' : null}`}>
            {onlySubscribers.length} Подписчики
          </div>
          <div onClick={() => changeStateSubscribe('subscriptions')} className={`User-information__subscribe-popup-header-button 
                          User-information__subscribe-popup-header-button_${ typeSubscribeValue === 'subscriptions' ? 'active' : null}`}>
            {onlySubscriptions.length} Подписки
          </div>
        </section>
        <section className='User-information__subscribe-popup-users'>
          {getSubscribeLoader
            ? 'LOADING'
            :  typeSubscribeValue === 'subscribers' ? arrSubscribe(onlySubscribers) : arrSubscribe(onlySubscriptions)
          }
        </section>
      </div>
    </Popup>
  )
}