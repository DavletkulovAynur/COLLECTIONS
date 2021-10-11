import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

export function SubscribePopupUsers({subscribers,
                                      subscriptions,
                                      statePopup,
                                      closePopup,
                                      changeSubscribeValue,
                                      typeSubscribeValue}) {

  function changeStateSubscribe(value) {
    changeSubscribeValue(value)
  }

  return (
    <Popup open={statePopup} onClose={closePopup} className='User-information__subscribe-popup'>
      <div className='User-information__subscribe-popup'>
        <section className='User-information__subscribe-popup-header'>
          <div onClick={() => changeStateSubscribe('subscribers')}  className={`User-information__subscribe-popup-header-button 
                          User-information__subscribe-popup-header-button_${ typeSubscribeValue === 'subscribers' ? 'active' : null}`}>
            {subscribers.length} Подписчики
          </div>
          <div onClick={() => changeStateSubscribe('subscriptions')} className={`User-information__subscribe-popup-header-button 
                          User-information__subscribe-popup-header-button_${ typeSubscribeValue === 'subscriptions' ? 'active' : null}`}>
            {subscriptions.length} Подписки
          </div>
        </section>
        <section>

        </section>
      </div>
    </Popup>
  )
}