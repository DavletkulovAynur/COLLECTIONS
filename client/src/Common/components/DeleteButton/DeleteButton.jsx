import React, {useRef, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './DeleteButton.scss'
import {useSelector} from 'react-redux'
import { ButtonLoading } from '../ButtonLoading/ButtonLoading'


// TODO useREF исправить
export function DeleteButton({idElement = '', eventFunction}) {
  const {removeCommentLoading} = useSelector(state => state.collectionViewReducer)
  const deleteButton = useRef()
  const [stateIdComment, setStateIdComment] = useState('')

  function handleClick() {
    const idComment = deleteButton.current.dataset.id
	setStateIdComment(idComment)
    eventFunction(idComment)
  }

  return (
    <div ref={deleteButton} className='Delete-button' data-id={idElement} onClick={handleClick}>
      {removeCommentLoading && stateIdComment === idElement
        ? <ButtonLoading/>
        : <FontAwesomeIcon icon='trash-alt' color='#000'/>
      }
    </div>
  )
}