import React from 'react'

export function UserNameTemplate({userName}) {
  return (
    <div className='User-information__user-name'>
      {userName}
    </div>
  )
}