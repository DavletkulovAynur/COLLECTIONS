import React from "react";
import {useSelector} from "react-redux";

export function SubscribeButtonsTemplate({userId, unSubscribeOnUser, subscribeOnUser, subscriptions}) {
  return (
    <>
      {subscriptions.includes(userId)
        ? <button onClick={unSubscribeOnUser}>ОТПИСКА</button>
        : <button onClick={subscribeOnUser}>ПОДПИСКА</button>
      }
    </>
  )

}