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
import {DefineAvatarUrl} from "../../../Common/utils/DefineAvatarUrl";


export function CollectionViewTemplate({collection = [],
                                         sendComment,
                                         comments,
                                         removeComment,}) {

  const {title, mainImg, owner, description, author, date, authorAvatar} = collection

  const avatarUrl = DefineAvatarUrl(authorAvatar)


  return (
    <div className='Article-view-root Article-view'>
      <section className='Article-view__Article-content Article-content'>
        <CollectionViewTitle title={title}/>
        <div className='Article-view__author-date'>
          <CollectionViewAuthor avatarUrl={avatarUrl} author={author}/>
          <CollectionViewDate date={date}/>
        </div>
        {/*TODO переделать */}
        <CollectionViewImg mainImg={mainImg} owner={owner}/>

        <CollectionViewDescription description={description}/>
      </section>

      <section className='Comments-wrapper'>
        <CollectionViewCommentTitle comments={comments}/>
        <InitCommentForm sendComment={sendComment}/>
        <CommentsBox removeComment={removeComment}/>
      </section>
    </div>
  )
}

