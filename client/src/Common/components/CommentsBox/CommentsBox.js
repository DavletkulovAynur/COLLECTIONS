import {API_URL} from '../../../config'
import React from 'react'
import './CommentsBox.scss'
import timeConverter from '../../utils/timeConverter'


const CommentsBox = ({comments, userId, removeComments}) => {

  let sortComments =  sortfunction(comments)

  return (
    <section className='Comments-box'>
      <div  className='Comments-box__content-area'>
        {sortComments.map((comment, index) => {
          const {time, title, authorName, description, authorAvatar, authorId} = comment
          const avatarUrl = authorAvatar ? `${API_URL + '/avatars/' + authorAvatar}` : false
          const datePublication = timeConverter(time)
          return (
            <section key={index}  className='Comments-box__Comment Comment'>
              <div className='Comment__avatar-box'>
                <img className='Comment__avatar-image' src={avatarUrl} alt='avatar'/>
              </div>
              <div>
                <div className='Comment__title'>{title}</div>
                <span className='Comment__author'>{authorName}</span>
                <span className='Comment__description'>{description}</span>
                <div className='Comment__date'>{datePublication}</div>
              </div>
              {authorId === userId
                ? <button onClick={removeComments}>Удалить</button>
                : null
              }
            </section>
          )
        })}
      </div>
    </section>

  )
}

export default CommentsBox

// utils
function sortfunction(array) {
  return  array.sort(function sortfunction(a, b) {
    return b.time - a.time
  })
}