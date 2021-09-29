import React from 'react'
import './CollectionView.scss'

import CommentsBox from "../../../Common/components/CommentsBox/CommentsBox";
import InitCommentForm from "../../../Common/components/InitCommentForm/InitCommentForm";
import {API_URL} from "../../../config";


export function CollectionViewTemplate({collection = [],
                                         sendComment,
                                         userId,
                                         removeComments,}) {

  const {comments = [], title, mainImg, owner, description, author, date} = collection

  const divStyle = () => {
    return {
      backgroundImage: `url(${API_URL}/${owner}/compressed/${mainImg})`,
    }
  };

  return (
      <div className='Article-view-root Article-view'>
        <section className='Article-view__Article-content Article-content'>
          <h1>{title}</h1>
          <div>
            {author}, {date}
          </div>
          {mainImg && <div className='test' style={divStyle()}></div>}
          <div className='description'>{description}</div>
        </section>

        <section className='Comments-wrapper'>
          <h2 className='Comment-box__title'>Комментарии<sup>{comments.length}</sup></h2>
          <InitCommentForm sendComment={sendComment}/>
          <CommentsBox userId={userId} comments={comments} removeComments={removeComments}/>
        </section>
      </div>
  )
}

