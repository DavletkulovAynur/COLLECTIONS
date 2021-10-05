import React from 'react'
import './Header.scss'
import {useHistory} from 'react-router-dom'
import {HeaderTemplate} from './Header.template'
import {DefineAvatarUrl} from "../../utils/DefineAvatarUrl";
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../../Store/actions/action";

export function Header() {
  const {owner} = useSelector((state) => state.authReducer)
  const {avatar} = owner
  const dispatch = useDispatch()
  const history = useHistory()
  const avatarUrl = DefineAvatarUrl(avatar)

  const logOut = () => {
    dispatch(logoutAction())
    localStorage.removeItem('token')
  }


  const logoutHandler = (e) => {
    e.preventDefault()
    history.push('/login')
  }

    return (
      <HeaderTemplate logOut={logOut} avatarUrl={avatarUrl} logoutHandler={logoutHandler}/>
    )
}

