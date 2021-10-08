import React from 'react'
import './Header.scss'
import {useDispatch, useSelector} from 'react-redux'
import {logoutAction} from '../../../Store/actions/action'
//Templates
import {HeaderLogo} from './templates/HeaderLogo'
import {Search} from '../Search/Search'
import {HeaderActionButtons} from './templates/HeaderActionButtons'
import {HeaderAvatar} from './templates/HeaderAvatar'

export function Header() {
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(logoutAction())
    localStorage.removeItem('token')
  }

  return (
    <div className='Header'>
      <HeaderLogo/>
      <div className='search-wrapper'>
        <Search/>
      </div>
      <div className='mini-icons-container'>
        <HeaderActionButtons logOut={logOut}/>
        <HeaderAvatar/>
      </div>
    </div>
  )
}

