import React from 'react'
import {useDispatch} from 'react-redux'
import { logoutAction } from 'Store/reducers/components/authReducer'

//Templates
import {HeaderLogo} from './templates/HeaderLogo'
import {Search} from '../Search/Search'
import {HeaderActionButtons} from './templates/HeaderActionButtons'
import {HeaderAvatar} from './templates/HeaderAvatar'

//Style
import './Header.scss'
import { popupAlertOpenAction } from 'Store/reducers/components/popupAlertReducer'

export function Header() {
  const dispatch = useDispatch()

  const test = () => {
    
    dispatch(logoutAction())
    localStorage.removeItem('token')
  }
  
  const logOut = () => {
    dispatch(popupAlertOpenAction(
      {
        statePopupAlert: true,
        text: 'Вы действительно хотите выйти?',
        fn: test
      }
    ))
    // dispatch(logoutAction())
    // localStorage.removeItem('token')
  }

  return (
    <div className='Header'>
      <HeaderLogo/>
      <div className='search-wrapper'>
        <Search/>
      </div>
      <div className='mini-icons-container'>
        <div className='Header__action-buttons'>
          <HeaderActionButtons logOut={logOut}/>
        </div>

        <HeaderAvatar/>
      </div>
    </div>
  )
}

