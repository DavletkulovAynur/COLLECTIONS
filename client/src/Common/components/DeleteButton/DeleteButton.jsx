import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './DeleteButton.scss'

export function DeleteButton({idElement = '', eventFunction}) {
  function handleClick(event) {
    let $rootElement = event.target.closest('[data-parent]');
    if (!$rootElement) return;
    eventFunction($rootElement.dataset.id)
  }
  return (
    <button className='Delete-button' data-parent data-id={idElement} onClick={(event) => handleClick(event)}>
      <FontAwesomeIcon icon='trash-alt' color='#000'/>
    </button>
  )
}