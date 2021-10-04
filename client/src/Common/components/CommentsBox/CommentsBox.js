import {API_URL} from '../../../config'
import React from 'react'
import './CommentsBox.scss'
import timeConverter from '../../utils/timeConverter'
import {useSelector} from "react-redux";


const CommentsBox = ({removeComment}) => {
  const {owner} = useSelector(state => state.authReducer)
  const {comments} = useSelector(state => state.collectionViewReducer)

  let sortComments =  sortfunction(comments)
  const {userId} = owner

  function defineIdComments(event) {
    removeComment(event.target.dataset.id)
  }

  return (
    <section className='Comments-box'>
      <div  className='Comments-box__content-area'>
        {sortComments.map((comment, index) => {
          const {time, title, authorName, description, authorAvatar, authorId, idComment} = comment
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
                ? <button data-id={idComment} onClick={(event) => defineIdComments(event)}>Удалить</button>
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