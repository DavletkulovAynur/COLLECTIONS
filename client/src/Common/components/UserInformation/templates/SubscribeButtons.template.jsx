import React from "react";
import {useSelector} from "react-redux";

export function SubscribeButtonsTemplate({userId, unSubscribeOnUser, subscribeOnUser, subscriptions}) {
  return (
    <div className='User-information__button-box'>
      {subscriptions.includes(userId)
        ? <button onClick={unSubscribeOnUser}>ОТПИСКА</button>
        : <button className='Button Button-root' onClick={subscribeOnUser}>ПОДПИСКА</button>
      }
    </div>
  )

}