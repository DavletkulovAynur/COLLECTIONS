import React from 'react'

export function SubscribeTemplate({numberUserPublications, subscribers, subscriptions}) {

  const subscribeArr = [
    {
      number: numberUserPublications,
      text: 'публикации',
    },
    {
      number: subscribers.length,
      text: 'Подписчики',
    },
    {
      number: subscriptions.length,
      text: 'Подписки',
    }
  ]


  return (
    <div className='User-information__publication-subscribe'>
      {subscribeArr.map((item, index) => {
        return (
          <div key={index} className='User-information__publication-subscribe-item'>
            <span className='User-information__publication-subscribe-item-number'>{item.number}</span>
            <span>{item.text}</span>
            <div className='User-information__publication-subscribe-item-point'>
              <div className='User-information__publication-subscribe-item-point-dote'></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}