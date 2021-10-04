import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export function InitCommentFormPreview({formShow}) {
  return (
    <div onClick={formShow} className='Comment-create-form-box__header Comment-create-header'>
      <FontAwesomeIcon icon="plus" style={{ color: '#fff' }}/>
      <div className='Comment-create-form-box__header-title'>Присоединиться к обсуждению...</div>
    </div>
  )
}