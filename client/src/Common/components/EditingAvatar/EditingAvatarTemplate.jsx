import React, {useRef} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function EditingAvatarTemplate({ avatarUrl,
                                                fileUploadHandler,
                                                previewImg,
                                                deleteFile,
                                                changeUserAvatar,
                                                openPopupPreview,
                                                loader,
                                              })

{
  return (
    <div className='Avatar-edit'>
      <AvatarChange avatarUrl={avatarUrl} fileUploadHandler={fileUploadHandler} loader={loader}/>
      <PreviewImgPopup openPopupPreview={openPopupPreview} previewImg={previewImg} deleteFile={deleteFile} changeUserAvatar={changeUserAvatar}/>
    </div>
  )
}



const PreviewImgPopup = ({openPopupPreview, previewImg, deleteFile, changeUserAvatar}) => {
  return (
    <Popup
      open={openPopupPreview}
      onClose={() => {deleteFile()}}
      modal
      nested
    >
      <div className="Avatar-edit__modal">
        <div className='Avatar-edit__modal-header'>
          <div className="Avatar-edit__modal-header-title">Изменить аватар</div>
          <div onClick={deleteFile} className='Avatar-edit__modal-header-close'>
            <FontAwesomeIcon icon='times' color='#000'/>
          </div>
        </div>
        <div className="content">
          <img src={previewImg} className='Avatar-edit__modal-preview'/>
        </div>
        <div className="Avatar-edit__modal-actions">
          <button className='Button Button-root Button_cancel' onClick={deleteFile}>Отмена</button>
          <button className='Button Button-root Avatar-edit__modal-action-load' onClick={changeUserAvatar}>Загрузить</button>
        </div>
      </div>

    </Popup>
  )
}



const AvatarChange = ({fileUploadHandler, avatarUrl, loader}) => {
  const test = useRef()

  return (
    <div className='Avatar-edit__box'>
      <div className='Avatar-edit__content'>
        <img className='Avatar-edit__photo' src={avatarUrl}/>
        <section className="Avatar-edit__input-wrapper">
          <input id="input__file"
            className="Avatar-edit__input-file"
            ref={test}
            accept="image/*"
            type="file"
            onClick={(event) => event.target.value = ''}
            onChange={(event) => fileUploadHandler(event)}
          />
          <label htmlFor="input__file">
            <span className="Avatar-edit__input-button-text">
              {loader
                ? 'LOADER'
                : 'Загрузить новую фотографию'
              }
              </span>
          </label>
        </section>
      </div>
    </div>
  )
}
