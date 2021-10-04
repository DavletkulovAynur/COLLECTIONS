import React from 'react'
import './CollectionView.scss'

import CommentsBox from "../../../Common/components/CommentsBox/CommentsBox";
import InitCommentForm from "../../../Common/components/InitCommentForm/InitCommentForm";

import {CollectionViewTitle} from "./templates/CollectionViewTitle";
import {CollectionViewAuthor} from "./templates/CollectionViewAuthor";
import {CollectionViewDate} from "./templates/CollectionViewDate";
import {CollectionViewImg} from "./templates/CollectionViewImg";
import {CollectionViewCommentTitle} from "./templates/CollectionViewCommentTitle";
import {CollectionViewDescription} from "./templates/CollectionViewDescription";


export function CollectionViewTemplate({collection = [],
                                         sendComment,
                                         userId,
                                         removeComments,
                                          loading}) {

  const {comments = [], title, mainImg, owner, description, author, date} = collection

  return (
    <div className='Article-view-root Article-view'>
      <section className='Article-view__Article-content Article-content'>
        <CollectionViewTitle title={title}/>
        <CollectionViewAuthor author={author}/>
        <CollectionViewDate date={date}/>
        <CollectionViewImg mainImg={mainImg} owner={owner}/>
        <CollectionViewDescription description={description}/>
      </section>

      <section className='Comments-wrapper'>
        <CollectionViewCommentTitle comments={comments}/>
        <InitCommentForm loading={loading} sendComment={sendComment}/>
        <CommentsBox userId={userId} comments={comments} removeComments={removeComments}/>
      </section>
    </div>
  )
}

