import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import React from "react";

export function HeaderActionButtons({logOut}) {
  return (
    <>
      <section>
        <div onClick={logOut}>
          <FontAwesomeIcon icon='sign-out-alt' color='#18191A' size='lg'/>
        </div>
      </section>

      <Link to='/add'>
        <section className='add'>
          <FontAwesomeIcon icon='plus' color='#000' size='lg'/>
        </section>
      </Link>
    </>
  )
}