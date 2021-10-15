import React from 'react'
import './PopUpCard.scss'
import {useDispatch, useSelector} from 'react-redux'
import {deleteCollectionAction} from '../../../Store/reducers/components/deleteCollectionReducer'
import {changeStatePopupAction} from '../../../Store/reducers/components/PopUpCardReducer'
import {PopUpCardContentTemplate} from './templates/PopUpCardContent.template'
import {URL_CLIENT} from '../../../config'
import {complainCollectionAction} from '../../../Store/sagas/components/sagaDeleteCollection'

// TODO Умный компонент
export function PopUpCard() {
  const dispatch = useDispatch()
  const {statePopUp, idCollection, ownerCard} = useSelector((state) => state.PopUpCardReducer)
  const {deleteLoading} = useSelector((state) => state.deleteCollectionReducer)

  function complainAboutCollection() {
    dispatch(complainCollectionAction({
      idCollection
    }))
  }

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

  function copyUrl() {
    navigator.clipboard.writeText(`${URL_CLIENT}article-view/${idCollection}`)
      .then(() => {
        closePopUp()
      })
      .catch(err => {
        closePopUp()
        console.log('Something went wrong', err);
      });
  }


  if(statePopUp) {
    installListenerKeyDown()

    return (
      <PopUpCardContentTemplate
        complainAboutCollection={complainAboutCollection}
        copyUrl={copyUrl}
        ownerCard={ownerCard}
        deleteLoading={deleteLoading}
        closePopUp={closePopUp}
        deleteCollection={deleteCollection}/>
    )
  }

  return null
}