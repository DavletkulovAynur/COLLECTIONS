import React from 'react'
import './styles/User.scss'
export function User({name, styleName = ''}) {
  return (
    <div className={`User ${styleName}`}>
      <div className='img'>

      </div>
      <div className='name'>
        {name}
      </div>
    </div>
  )
}
