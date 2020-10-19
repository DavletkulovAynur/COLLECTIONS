import React from 'react'
import './Nav.scss'
import {Link} from "react-router-dom";
import {Users} from "Common/components/Users/Users";

function Nav() {
  return (
    <div className='Nav'>
      <div className='Nav__item'>
        <Link to='/'>List</Link>
      </div>

      <div className='Nav__item'>
        <Link to='/my-collection'>My collection</Link>
      </div>

      <div className='Nav__wrapper'>
        <div className='Nav__item'>
          Active users
        </div>
        <Users/>
      </div>

    </div>
  );
}

export default Nav
