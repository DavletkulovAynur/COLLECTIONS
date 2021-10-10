import React from 'react'
import './PopUpCard.scss'
import {useDispatch, useSelector} from 'react-redux'
import {deleteCollectionAction} from '../../../Store/reducers/components/deleteCollectionReducer'
import {changeStatePopupAction} from '../../../Store/reducers/components/PopUpCardReducer'

// TODO Умный компонент
export function PopUpCard() {
  const dispatch = useDispatch()
  const {statePopUp, idCollection} = useSelector((state) => state.PopUpCardReducer)

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

  if(statePopUp) {
    return (
      <>
        <div className='Popup Popup-root'>
          <div className='Popup__content'>
            <div onClick={deleteCollection} className='Popup__button Popup__content-button Popup__content-button-delete'>
              Удалить
            </div>
            <div className='Popup__button Popup__content-button'>
              Копировать ссылку
            </div>
          </div>
          <div onClick={closePopUp} className='Popup__button Popup__button-cancel'>
            отмена
          </div>
        </div>
        <div className='Popup__shadow'></div>
      </>
    )
  }

  return (
    <></>
  )
}