import React from 'react'
import './styles/User.scss'
export function User({name}) {
  return (
    <div className='User'>
      <div className='User__img'>

      </div>
      <div className='User__name'>
        {name}
      </div>
    </div>
  )
}
