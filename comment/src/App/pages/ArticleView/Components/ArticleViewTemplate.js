import React from 'react'
import PropTypes from 'prop-types';
import {CommentForm} from './CommentForm'
import './styles/ArticleViewTemplate.scss'

export function ArticleViewTemplate({game, handleSubmit}) {
  const divStyle = (img) => {
    return {
      backgroundImage: 'url(' + img + ')'
    }
  };
  return (
    <>
      <div className='Article-view-template'>
        <div className='img-wrapper'>
          <div className='art-wrapper'>
            <div style={{background: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${game.img})` }}  className='art'></div>
          </div>
        </div>
        <h2 className='title1'>{game.name}</h2>
        <div>{game.description}</div>
        <hr/>
        <div  className='comments'>
          <div className='comment-title'>Комментарии (12)</div>
          {game.comments.map((comment, index) => {
            return (
              <div className='comment-item' key={index}>{comment}</div>
            )
          })}
        </div>
      </div>
      <CommentForm handleSubmit={handleSubmit}/>
    </>
  )
}

ArticleViewTemplate.propTypes = {
  game: PropTypes.object,
  handleSubmit: PropTypes.func
}
