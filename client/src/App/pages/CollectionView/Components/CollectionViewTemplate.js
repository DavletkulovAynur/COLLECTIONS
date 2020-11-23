import React from 'react'
import PropTypes from 'prop-types';
import {CommentForm} from './CommentForm'
import './styles/ArticleViewTemplate.scss'
import {FeatureBgGradient} from "App/pages/CollectionView/Components/FeatureBgGradient";

const images = [
  'https://st.overclockers.ru/images/lab/2019/10/27/1/001_art_big.jpg',
  'https://s1.1zoom.ru/big0/123/396284-blackangel.jpg',
  'https://images2.alphacoders.com/795/795229.jpg',
  'https://images2.alphacoders.com/601/thumb-1920-601148.jpg',
  'https://images.alphacoders.com/909/thumb-1920-909823.jpg'
]

const tags = ['adventure', 'action', 'playstation', 'gods', 'unsharted', 'insomniac']

export function CollectionViewTemplate({certainCollection, handleSubmit, commentLoader}) {



  const $comments = () => {
    return (
      <div  className='comments'>
        <div className='comment-title'>Comments <sup>{certainCollection.comments.length}</sup></div>
        {certainCollection.comments.map((comment, index) => {
          return (
            <section key={index}  className='comment-item'>
              <div>{comment.title}</div>
              <div >{comment.description}</div>
              <div>{comment.time}</div>
              <div>{comment.author}</div>
            </section>
          )
        })}
      </div>
      )
  }

  const $tags = () => {
    return (
      <div className='tags'>
        {tags.map((tag, index) => {
          return (
            <div key={index} className='tag'>{tag}</div>
          )
        })}
      </div>
      )
  }

  const $images = () => {
    return (
      <section className='secondary-content'>
        <div className='images-screenshots'>
          {images.map((img, index) => {
            return (
              <div key={index} className='images-screenshots__wrapper'>
                <img className='img' src={img}/>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  return (
      <div className='Article-view-template'>
        <section className='main-content'>
          {/*<FeatureBgGradient certainCollection={certainCollection}/> на будущее*/}
          <h2 className='title-72'>{certainCollection.name}</h2>
          {$tags()}
          <div className='description'>{certainCollection.description}</div>
          <CommentForm handleSubmit={handleSubmit} commentLoader={commentLoader}/>
          {$comments()}
        </section>
      </div>
  )
}

CollectionViewTemplate.propTypes = {
  game: PropTypes.object,
  handleSubmit: PropTypes.func
}
