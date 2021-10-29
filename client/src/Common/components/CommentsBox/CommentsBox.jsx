import React from 'react'
import './CommentsBox.scss'
import timeConverter from '../../utils/timeConverter'
import {useSelector} from "react-redux";
import {DefineAvatarUrl} from "../../utils/DefineAvatarUrl";

import {DeleteButton} from "../DeleteButton/DeleteButton";


const CommentsBox = ({removeComment}) => {
  const {owner} = useSelector(state => state.authReducer)
  const {comments} = useSelector(state => state.collectionViewReducer)

  let sortComments =  sortfunction(comments)
  const {userId} = owner

  function defineIdComments(id) {
    removeComment(id)
  }

  return (
    <section className='Comments-box'>
      <div  className='Comments-box__content-area'>
        {sortComments.map((comment, index) => {
          const {time, title, authorName, description, avatar, authorId, _id} = comment
         
          const avatarUrl = DefineAvatarUrl(avatar)
          
          const datePublication = timeConverter(time)
          return (
            <section key={index}  className='Comments-box__Comment Comment'>
              <div className='Comment__wrapper'>
                <div className='Comment__avatar-box'>
                  <img className='Comment__avatar-image' src={avatarUrl} alt='avatar'/>
                </div>
                <div>
                  <div className='Comment__title'>{title}</div>
                  <span className='Comment__author'>{authorName}</span>
                  <span className='Comment__description'>{description}</span>
                  <div className='Comment__date'>{datePublication}</div>
                </div>
              </div>
              {authorId === userId
                ? <DeleteButton eventFunction={defineIdComments} idElement={_id}/>
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