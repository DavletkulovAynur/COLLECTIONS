import {Link} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {DefineAvatarUrl} from "../../../utils/DefineAvatarUrl";

export function HeaderAvatar() {
  const {owner} = useSelector((state) => state.authReducer)
  const {avatar} = owner
  const avatarUrl = DefineAvatarUrl(avatar)

  return (
    <section className='user-avatar'>
      <Link to='/personal-area'>
        <div className={`user`}>
          <img className='avatar' src={avatarUrl}/>
        </div>
      </Link>
    </section>
  )
}