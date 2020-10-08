import React from 'react'
import './Nav.scss'
import {Link} from "react-router-dom";

function Nav() {
  return (
    <div className='Nav'>
      <div className='links'>
        <div className='link'><Link to='/'>friends</Link></div>
        <div className='link'><Link to='/'>лента</Link></div>
        <div className='link'><Link to='/'>My collection</Link></div>
      </div>
    </div>
  );
}

export default Nav