import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {ButtonLoading} from "../../ButtonLoading/ButtonLoading";


export function SubscribeButtonsTemplate({subscribers, unSubscribeOnUser, subscribeOnUser}) {
  const {loader} = useSelector((state) => state.subscribeReducer)
  // TODO Owner страницы
  const {owner} = useSelector((state) => state.authReducer)
  const {userId} = owner

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