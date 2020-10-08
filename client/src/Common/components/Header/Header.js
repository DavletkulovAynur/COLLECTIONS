import React, {useContext} from 'react'
import './Header.scss'
import {useHistory} from 'react-router-dom'
import {AuthContext} from 'App/context/AuthContext'

export function Header() {
  const history = useHistory()
  const auth = useContext(AuthContext)

  console.log(auth)
  const logoutHandler = (e) => {
    e.preventDefault()
    auth.logout()
    history.push('/login')
  }

    return (
      <div className='Header'>
        <div className='Header-wrapper'>
            {/*<div className='Header-item'>*/}
            {/*    <a className='Header-item-link Header-logo' href="/">*/}
            {/*        <div className='Logo'></div>*/}
            {/*    </a>*/}
            {/*</div>*/}
            <div className='Header-item'>
                <form className='Header-search-form' >
                    <div className='Header-search-input'>
                        <input type="text" className="header__search__input" placeholder="Искать "/>
                    </div>
                </form>
            </div>
            <div className='Header-item'>
                <div className="Header-item-link">USER: {auth.userName}</div>
            </div>
            <button onClick={logoutHandler}>
              ВЫЙТИ
            </button>
        </div>
      </div>
    )
}
