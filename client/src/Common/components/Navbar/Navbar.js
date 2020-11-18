import React from 'react'
import logout from "Common/assets/images/logout.svg";
import './Navbar.scss'

export function Navbar() {
  return (
    <div className='Navbar'>
      <div className='navbar-user__menu'>
        <div className='menu --vertical'>
          <ul className='menu__list'>
            <li className='menu__item'>
              <button className='menu__link'>
                <span className='menu__icon'>
                  <img src={logout} alt=""/>
                </span>
                <span className='menu__text'>Выйти</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
