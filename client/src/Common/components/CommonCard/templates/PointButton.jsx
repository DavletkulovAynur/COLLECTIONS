import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function PointButton({owner, idCollection, userId, deleteCollection}) {
  const ownerCard = owner === userId ? true : false
  return (
    <button className='Pin__dots' data-id-collection={idCollection} onClick={(event) => deleteCollection(event, ownerCard)}>
      <FontAwesomeIcon icon='ellipsis-v' color='#000'/>
    </button>
  )
}