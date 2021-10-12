import React from "react";

export function PopUpCardContentTemplate({deleteCollection, closePopUp, deleteLoading}) {
  function test() {
    console.log('super')
  }
  return (
    <>
      <div className='Popup Popup-root'>
        <div className='Popup__content'>
          <div onClick={deleteCollection} className='Popup__button Popup__content-button Popup__content-button-delete'>
            {deleteLoading
              ? 'Loading'
              : 'Удалить'
            }
          </div>
          <div className='Popup__button Popup__content-button'>
            Копировать ссылку
          </div>
        </div>
        <div onClick={closePopUp} className='Popup__button Popup__button-cancel'>
          отмена
        </div>
      </div>
      <div onKeyUp={test} onClick={closePopUp} className='Popup__shadow'></div>
    </>
  )
}