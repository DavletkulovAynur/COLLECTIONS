import {DefineAvatarUrl} from "../../../utils/DefineAvatarUrl";
import {Link} from "react-router-dom";
import React from "react";


export function UserLink ({authorAvatar, owner, author, userId}){

  const avatarUrl = DefineAvatarUrl(authorAvatar)

  let link
  if(userId === owner) {
    link = `personal-area`
  } else {
    link = `user-area/${owner}`
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