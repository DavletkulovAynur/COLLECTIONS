import React from 'react'
import './EditingProfile.scss'
import {Loading} from '../Loading/Loading'
import Input from '../Input/Input'






export default function EditingProfileTemplate({fileUploadHandler,
                                                    handleClose,
                                                    deleteFile,
                                                    sendAvatar,
                                                    sendUserInformation,
                                                    loading,
                                                    open,
                                                    previewImg,
                                                    avatarUrl,
                                                    nameInput,
                                                    aboutUserInput,
                                                    placeInput,
                                                    nameInputError,}) {



  return (
  <div className='Popup-edit-user-info'>
    <div
        className='Edit-user-information-dialog'
        >

        <div>
          <Header handleClose={handleClose}/>
          <div>
            <AvatarChange avatarUrl={avatarUrl} fileUploadHandler={fileUploadHandler}/>

            {loading
            ? <Loading colorLoading={'#000'}/>
            : <div>
                {!previewImg
                  ? <UserInformation
                      nameInputError={nameInputError}
                      nameInput={nameInput}
                      aboutUserInput={aboutUserInput}
                      placeInput={placeInput}
                      sendUserInformation={sendUserInformation}/>
                  : <PreviewImg previewImg={previewImg} deleteFile={deleteFile} sendAvatar={sendAvatar}/>
                }
              </div>
            }
          </div>
        </div>
      </div>
  </div>
    );
}

const Header = ({handleClose}) => {
  return (
    <div className='header'>
      <div >
        Изменение профиля
      </div>
      <div>
        <div onClick={handleClose}>
          <button>close</button>
        </div>
      </div>
    </div>
  )
}

const AvatarChange = ({fileUploadHandler, avatarUrl, classes}) => {
  return (
    <div className='avatar-wrapper'>
      <div className='title'>
        Фотография
      </div>
      <div className='content'>
        <img className='avatar' src={avatarUrl}/>
        <div>
          <input
            accept="image/*"
            type="file"
            onChange={(event) => fileUploadHandler(event)}
          />
          <label htmlFor="contained-button-file">
            <button>
              Изменить
            </button>
          </label>
          <input accept="image/*" type="file" />
        </div>
      </div>
    </div>
  )
}

const UserInformation = ({nameInput, placeInput, aboutUserInput, nameInputError, sendUserInformation}) => {
  return (
    <section>
      <div className='Test2'>
        <Input error={nameInputError} binding={nameInput} label='Имя пользователя'/>
      </div>
      <div className='Test2'>
        <Input binding={placeInput} label='Расположение'/>
      </div>
      <div className='Test2'>
        <Input multiline={true}  rows={4} binding={aboutUserInput} label='Расскажите немного о себе'/>
      </div>
      <button onClick={sendUserInformation}>
        Сохранить
      </button>
    </section>
  )
}

const PreviewImg = ({previewImg, deleteFile, sendAvatar}) => {
  return (
    <div className='preview-img-wrapper'>
      <img src={previewImg} className='preview-img'/>
      <div className='preview-buttons'>
        <button onClick={deleteFile}>Отмена</button>
        <button onClick={sendAvatar}>Загрузить</button>
      </div>
    </div>
  )
}
