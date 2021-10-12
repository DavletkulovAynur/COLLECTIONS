import React, {useState} from 'react'
import {SubscribePopupUsers} from './SubscribePopupUsers'


export function SubscribeTemplate({numberUserPublications, subscribers, subscriptions, getAllSubscribe}) {
  const [statePopup, setStatePopup] = useState(false)
  const [typeSubscribeValue, setTypeSubscribeValue] = useState('')

  // TODO функцию переделать
  function test(event) {
    let $root = event.target.closest('[data-type]');
    if (!$root) return;
    if($root.dataset.type === 'publication') return;

    getAllSubscribe()
    setTypeSubscribeValue($root.dataset.value)
    openPopup()
  }

  function closePopup() {
    setStatePopup(false)
  }

  function openPopup() {
    setStatePopup(true)
  }

  function changeSubscribeValue(value) {
    setTypeSubscribeValue(value)
  }


  const subscribeArr = [
    {
      number: numberUserPublications,
      text: 'публикации',
      dataType: 'publication'
    },
    {
      number: subscribers.length,
      text: 'Подписчики',
      dataType: 'subscribe',
      value: 'subscribers'
    },
    {
      number: subscriptions.length,
      text: 'Подписки',
      dataType: 'subscribe',
      value: 'subscriptions'
    }
  ]


  return (
    <>
      <div className='User-information__publication-subscribe'>
        {subscribeArr.map((item, index) => {
          return (
            <div  data-type={item.dataType}
                  data-value={item.value}
                  onClick={(event) => test(event)}
                  key={index}
                  className={`User-information__publication-subscribe-item User-information__type-${item.dataType}`}>
              <span className='User-information__publication-subscribe-item-number'>{item.number}</span>
              <span>{item.text}</span>
              <div className='User-information__publication-subscribe-item-point'>
                <div className='User-information__publication-subscribe-item-point-dote'></div>
              </div>
            </div>
          )
        })}
      </div>
      <SubscribePopupUsers
        changeSubscribeValue={changeSubscribeValue}
        typeSubscribeValue={typeSubscribeValue}
        closePopup={closePopup}
        statePopup={statePopup}
        subscribers={subscribers}
        subscriptions={subscriptions}/>
    </>

  )
}