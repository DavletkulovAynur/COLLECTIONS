import React from 'react'
import {Link} from 'react-router-dom'
import './FooterMobile.scss'

export function FooterMobile() {
  return (
    <div className='Footer-mobile'>
        <div className='icons-wrapper'>
          <Link to='/'>
            <div className='icon'></div>
          </Link>
          <Link to='/search-mobile'>
            <div className='icon loupe'></div>
          </Link>
          <Link to='/add'>
            <div className='icon plus'></div>
          </Link>
          <Link to='/personal-area'>
            <div className='icon user'></div>
          </Link>
        </div>
    </div>
  )
}