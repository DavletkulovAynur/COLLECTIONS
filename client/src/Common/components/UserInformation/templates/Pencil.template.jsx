import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import React from "react";

export function PencilTemplate() {
  return (
    <Link className='User-information__pencil-edit' to='/personal-area/edit-user'>
      <FontAwesomeIcon icon='pencil-alt' color='#fff'/>
    </Link>
  )
}