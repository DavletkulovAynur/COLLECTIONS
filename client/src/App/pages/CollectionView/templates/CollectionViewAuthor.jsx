import React from 'react'

export function CollectionViewAuthor({avatarUrl, author}) {
  return (
    <div className='Article-view__author'>
      <img className='Article-view__author-avatar' src={avatarUrl} alt=''/>
      <span className='Article-view__author-name'>{author}</span>
    </div>
  )
}