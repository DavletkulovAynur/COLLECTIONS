import React from 'react'
import dotsImg from '../../../assets/images/icons/dots.svg'

export function PointButton({owner, idCollection, userId, deleteCollection}) {
  return (
    <button className='Pin__dots' data-id-collection={idCollection} onClick={(event) => deleteCollection(event)}>
      {userId === owner ? <img src={dotsImg} alt='dots'/> : null}
    </button>
  )
}