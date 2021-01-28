import React from 'react'
import './Nav.scss'
import {Link} from "react-router-dom";
import {Users} from "Common/components/Users/Users";
import {User} from '../User/User'


function Nav() {
  return (
    <div className='Nav'>
      <div className='desktop'>
        <div className='item'>
          <Link to='/'>List</Link>
        </div>

        <div className='item'>
          <Link to='/my-collection'>My collection</Link>
        </div>

        <div className='wrapper'>
          <div className='item'>
            Active users
          </div>
          <Users/>
        </div>
      </div>

      <div className='mobile'>
        <div className='list'></div>
        <div className='search'></div>
        <div className='add'></div>
        <User/>
      </div>
    </div>
  );
}

export default Nav
