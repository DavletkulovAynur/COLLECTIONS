import {DefineAvatarUrl} from "../../../utils/DefineAvatarUrl";
import {Link} from "react-router-dom";
import React from "react";


export function UserLink ({authorAvatar, owner, author, userId, avatar}){

  let avatarUrl

  let link
  if(userId === owner) {
    link = `personal-area`
    avatarUrl = DefineAvatarUrl(avatar)
  } else {
    link = `user-area/${owner}`
    avatarUrl = DefineAvatarUrl(authorAvatar)
  }
  return (
    <Link className='Pin__author-hidden'  to={link}>

        <section className='Pin__about-author'>
          <img className='Pin__about-author-avatar' src={avatarUrl}/>
          <span className='Pin__about-author-name'>{author}</span>
        </section>


    </Link>
  )
}