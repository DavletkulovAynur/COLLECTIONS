import React from 'react'
import './PopUpCard.scss'
import {useDispatch, useSelector} from 'react-redux'
import {deleteCollectionAction} from '../../../Store/reducers/components/deleteCollectionReducer'
import {changeStatePopupAction} from '../../../Store/reducers/components/PopUpCardReducer'
import {PopUpCardContentTemplate} from "./templates/PopUpCardContent.template";

// TODO Умный компонент
export function PopUpCard() {
  const dispatch = useDispatch()
  const {statePopUp, idCollection} = useSelector((state) => state.PopUpCardReducer)
  const {deleteLoading} = useSelector((state) => state.deleteCollectionReducer)

  function deleteCollection() {
    dispatch(deleteCollectionAction({
      idCollection
    }))
  }

  function closePopUp() {
    dispatch(changeStatePopupAction({
      statePopUp: false,
      idCollection: null
    }))

  }

  function listener(event){
    if(event.code === 'Escape') {
      closePopUp()
      removeListenerKeyDown()
    }
  }

  function installListenerKeyDown() {
    document.body.addEventListener('keydown', listener)
  }

  function removeListenerKeyDown() {
    document.body.removeEventListener('keydown', listener)
  }


  if(statePopUp) {
    installListenerKeyDown()

    return (
      <PopUpCardContentTemplate
        deleteLoading={deleteLoading}
        closePopUp={closePopUp}
        deleteCollection={deleteCollection}/>
    )
  }

  return null
}