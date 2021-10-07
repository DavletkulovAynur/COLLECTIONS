import {Link} from "react-router-dom";
import React from "react";

export function HeaderLogo() {
  return (
    <Link to='/'>
      <div className='Header__logo Logo'>
        <div className='Logo__icon'>
          <div className='test'></div>
        </div>
        <div className='Logo__text'>
          Collection
        </div>
      </div>
    </Link>
  )
}