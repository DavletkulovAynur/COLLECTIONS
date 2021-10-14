import React from 'react'
import {Link} from 'react-router-dom'
import './FooterMobile.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function FooterMobile() {
  return (
    <div className='Footer-mobile'>
        <div className='icons-wrapper'>
          <Link className='Footer-mobile__icon' to='/'>
            <FontAwesomeIcon icon='home' color='#fff'/>
          </Link>
          <Link className='Footer-mobile__icon' to='/search-mobile'>
            <FontAwesomeIcon icon='search' color='#fff'/>
          </Link>
          <Link className='Footer-mobile__icon' to='/add'>
            <FontAwesomeIcon icon='plus' color='#fff'/>
          </Link>
          <Link className='Footer-mobile__icon' to='/personal-area'>
            <FontAwesomeIcon icon='user' color='#fff'/>
          </Link>
        </div>
    </div>
  )
}