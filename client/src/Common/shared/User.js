import React from 'react'
import './styles/User.scss'

export function User({name, styleName = '', component = ''}) {
  return (
    <div className={`User ${styleName}`}>
      <div className='img'>

      </div>
      {component !== 'Header'
        ? <div className='name'>
            {name}
          </div>
        : null }

    </div>
  )
}
