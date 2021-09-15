import React from 'react'
import './CollectionView.scss'

import CommentsBox from "../../../Common/components/CommentsBox/CommentsBox";
import InitCommentForm from "../../../Common/components/InitCommentForm/InitCommentForm";


export function CollectionViewTemplate({collection = [], comments, sendComment}) {

  return (
      <div className='Article-view-template'>
        <section className='main-content'>
          <h2 className='title-72'>{collection.name}</h2>
          <div className='description'>{collection.description}</div>
          <InitCommentForm sendComment={sendComment}/>
          <CommentsBox comments={comments}/>
        </section>
      </div>
  )
}

