import React, {useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './DeleteButton.scss'
import {useSelector} from 'react-redux'


// TODO useREF исправить
export function DeleteButton({idElement = '', eventFunction}) {
  const {removeCommentLoading} = useSelector(state => state.collectionViewReducer)
  const deleteButton = useRef()

  function handleClick() {
    const idComment = deleteButton.current.dataset.id
    eventFunction(idComment)
  }

  return (
    <div ref={deleteButton} className='Delete-button' data-id={idElement} onClick={handleClick}>
      {removeCommentLoading
        ? 'LOADING'
        : <FontAwesomeIcon icon='trash-alt' color='#000'/>
      }
    </div>
  )
}