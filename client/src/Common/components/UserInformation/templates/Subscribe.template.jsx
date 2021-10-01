import React from 'react'

export function SubscribeTemplate({countPublication, subscribers, subscriptions}) {
  return (
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
  )
}