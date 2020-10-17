import React from 'react'
import './Nav.scss'
import {Link} from "react-router-dom";
import {Users} from "Common/components/Users/Users";

function Nav() {
  return (
    <div className='Nav'>
      <div className='links'>
        <div className='link'>
          <Link to='/'>лента</Link>
        </div>
        <div className='link'>
          <Link to='/my-collection'>My collection</Link>
        </div>
      </div>
      <Users/>
    </div>
  );
}

export default Nav
