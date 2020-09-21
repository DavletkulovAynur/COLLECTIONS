import React from "react";
import './styles/MainPageHeader.scss'
import Button from "../../../../Common/components/Button/Button";
import {Link} from "react-router-dom";

export function MainPageHeader() {
  return (
    <div className='Main-Page-Header'>
      <div className='title'>GAMES</div>
      <Link to='/add'>
        <Button name='add'/>
      </Link>
    </div>
  )
}
