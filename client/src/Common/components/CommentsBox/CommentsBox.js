import {API_URL} from '../../../config'
import React from 'react'
import './CommentsBox.scss'
import timeConverter from '../../utils/timeConverter'


const CommentsBox = ({comments}) => {

  let sortComments =  sortfunction(comments)


  return (
    <section className='Comments-box'>
      <div  className='Comments-box__content-area'>
        {sortComments.map((comment, index) => {
          const avatarUrl = comment.authorAvatar ? `${API_URL + '/avatars/' + comment.authorAvatar}` : false
          const datePublication = timeConverter(comment.time)
          return (
            <section key={index}  className='Comments-box__Comment Comment'>
              <div className='Comment__avatar-box'>
                <img className='Comment__avatar-image' src={avatarUrl}/>
              </div>
              <div>
                <div className='Comment__title'>{comment.title}</div>
                <span className='Comment__author'>{comment.authorName}</span>
                <span className='Comment__description'>{comment.description}</span>
                <div className='Comment__date'>{datePublication}</div>
              </div>
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