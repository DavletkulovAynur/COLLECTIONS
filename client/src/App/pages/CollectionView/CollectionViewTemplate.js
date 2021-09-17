import React from 'react'
import './CollectionView.scss'

import CommentsBox from "../../../Common/components/CommentsBox/CommentsBox";
import InitCommentForm from "../../../Common/components/InitCommentForm/InitCommentForm";


export function CollectionViewTemplate({collection = [], comments, sendComment, userId, removeComments}) {

  return (
      <div className='Article-view-root Article-view'>
        <section className='Article-view__Article-content Article-content'>
          <h2 className='title-72'>{collection.name}</h2>
          <div className='description'>{collection.description}</div>
        </section>

        <section className='Comments-wrapper'>
          <h2 className='Comment-box__title'>Комментарии<sup>{comments.length}</sup></h2>
          <InitCommentForm sendComment={sendComment}/>
          <CommentsBox userId={userId} comments={comments} removeComments={removeComments}/>
        </section>
      </div>
  )
}

