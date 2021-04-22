import React from 'react'
import {CommentForm} from './CommentForm'
import './styles/ArticleViewTemplate.scss'
import {API_URL} from "../../../../config";


export function CollectionViewTemplate({collection = [], comments, handleSubmit}) {

  const $comments = () => {
    let sortComments =  comments
    sortfunction(sortComments)
      return (
        <section className='Comments'>
          <div className='comment-title'>Comments <sup>{sortComments.length}</sup></div>
          <div  className='comments'>
            {sortComments.map((comment, index) => {
              const avatarUrl = comment.authorAvatar ? `${API_URL + '/avatars/' + comment.authorAvatar}` : false
              return (
                  <section key={index}  className='comment-item'>
                      <div className='avatar'>
                          <img className='test' src={avatarUrl}/>
                      </div>
                      <div className='content'>
                          <div className='title'>{comment.title}</div>
                          <span className='author-name'>{comment.authorName}</span>
                          <span className='content-description'>{comment.description}</span>
                          <div className='time'>{comment.time}</div>
                      </div>
                  </section>
              )
            })}
          </div>
        </section>

      )
  }

  return (
      <div className='Article-view-template'>
        <section className='main-content'>
          <h2 className='title-72'>{collection.name}</h2>
          <div className='description'>{collection.description}</div>
          <CommentForm handleSubmit={handleSubmit}/>
          {$comments()}
        </section>
      </div>
  )
}

function sortfunction(array) {
  return  array.sort(function sortfunction(a, b) {
    return b.time - a.time
  })
}
