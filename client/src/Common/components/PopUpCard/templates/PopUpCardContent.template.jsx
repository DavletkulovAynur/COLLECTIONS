import React from "react";

export function PopUpCardContentTemplate({ copyUrl,
                                           deleteCollection,
                                           closePopUp,
                                           deleteLoading,
                                           complainAboutCollection,
                                           ownerCard}) {

  const buttons = {
    deleteButton: {
      textValue: 'Удалить',
      action: deleteCollection,
    },

    complainButton: {
      textValue: 'Пожаловаться',
      action: complainAboutCollection,
    }
  }

  const deleteOrComplainTemplate = ({textValue, action}) => {
    return (
      <div onClick={action} className='Popup__button Popup__content-button Popup__content-button-delete'>
        {deleteLoading
          ? 'Loading'
          : textValue
        }
      </div>
    )
  }

  return (
    <>
      <div className='Popup Popup-root'>
        <div className='Popup__content'>
          {ownerCard
            ?  deleteOrComplainTemplate(buttons.deleteButton)
            :  deleteOrComplainTemplate(buttons.complainButton)
          }
          <div onClick={copyUrl} className='Popup__button Popup__content-button'>
            Копировать ссылку
          </div>
        </div>
        <div onClick={closePopUp} className='Popup__button Popup__button-cancel'>
          отмена
        </div>
      </div>
      <div onClick={closePopUp} className='Popup__shadow'></div>
    </>
  )
}