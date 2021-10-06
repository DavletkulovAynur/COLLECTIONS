import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {ButtonLoading} from "../../ButtonLoading/ButtonLoading";


export function SubscribeButtonsTemplate({userId, subscribers, unSubscribeOnUser, subscribeOnUser, subscriptions}) {
  const {loader} = useSelector((state) => state.subscribeReducer)

  console.log('subscribers', subscribers)
  return (
    <div className='User-information__button-box'>
      {subscribers.includes(userId)
        ? <button disabled={loader} className='Button Button-root Button_undo-actions' onClick={unSubscribeOnUser}>
          {loader ? <ButtonLoading/> : 'отписаться'}
      </button>
        : <button disabled={loader} className='Button Button-root' onClick={subscribeOnUser}>
          {loader ? <ButtonLoading/> : 'подписаться'}
        </button>
      }
    </div>
  )

}