import React from 'react'

export function AvatarTemplate({avatarUrl}) {
  return (
    <img src={avatarUrl} className='User-information__avatar'/>
  )
}