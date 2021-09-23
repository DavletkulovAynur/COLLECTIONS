import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

export default function EditingAvatarTemplate({
                                                avatarUrl,
                                                fileUploadHandler,
                                                previewImg,
                                                deleteFile,
                                                changeUserAvatar,
                                                openPopupPreview,
                                              })

{
  return (
    <div className='Avatar-edit'>
      <AvatarChange avatarUrl={avatarUrl} fileUploadHandler={fileUploadHandler}/>
      <PreviewImgPopup openPopupPreview={openPopupPreview} previewImg={previewImg} deleteFile={deleteFile} changeUserAvatar={changeUserAvatar}/>
    </div>
  )
}

const PreviewImgPopup = ({openPopupPreview, previewImg, deleteFile, changeUserAvatar}) => {
  return (
    <Popup
      open={openPopupPreview}
      modal
      nested
    >
      <div className="modal">
        <button className="close" onClick={deleteFile}></button>
        <div className="header"> Modal Title </div>
        <div className="content">
          <div className='preview-img-wrapper'>
            <img src={previewImg} className='preview-img'/>
          </div>
        </div>
        <div className="actions">
          <button onClick={deleteFile}>Отмена</button>
          <button onClick={changeUserAvatar}>Загрузить</button>
        </div>
      </div>

    </Popup>
  )
}

const AvatarChange = ({fileUploadHandler, avatarUrl}) => {
  return (
    <div className='Avatar-edit__box'>
      <div className='Avatar-edit__content'>
        <img className='Avatar-edit__photo' src={avatarUrl}/>
        <section className="Avatar-edit__input-wrapper">
          <input id="input__file" class="Avatar-edit__input-file"
            accept="image/*"
            type="file"
            onChange={(event) => fileUploadHandler(event)}
          />
          <label htmlFor="input__file">
            <span className="Avatar-edit__input-button-text">Загрузить новую фотографию</span>
          </label>
        </section>
      </div>
    </div>
  )
}
