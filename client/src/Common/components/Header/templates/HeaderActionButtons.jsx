import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import React from "react";

export function HeaderActionButtons({logOut}) {
  return (
    <>
      <section >
        <div className='Header__action-button' onClick={logOut}>
          <FontAwesomeIcon icon='sign-out-alt' color='#18191A' size='lg'/>
        </div>
      </section>


    <section className='Header__action-button-add'>
      <Link to='/add'>
        <div className='Header__action-button'>
          <FontAwesomeIcon icon='plus' color='#000' size='lg'/>
        </div>
      </Link>
    </section>
    </>
  )
}