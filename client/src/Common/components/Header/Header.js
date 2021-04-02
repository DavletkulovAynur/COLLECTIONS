import React from 'react'
import './Header.scss'
import {useHistory} from 'react-router-dom'
import {HeaderTemplate} from './Header.template'
import {DefineAvatarUrl} from "../../utils/DefineAvatarUrl";
import {useDispatch} from "react-redux";
import {logoutAction} from "../../../Redux/actions/action";

export function Header() {
  const dispatch = useDispatch()
  const history = useHistory()
  const avatarUrl = DefineAvatarUrl()

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

