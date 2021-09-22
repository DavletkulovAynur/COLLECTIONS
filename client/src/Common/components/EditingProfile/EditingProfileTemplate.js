import React from 'react'
import './EditingProfile.scss'
import {Loading} from '../Loading/Loading'
import Input from '../Input/Input'






export default function EditingProfileTemplate({fileUploadHandler,
                                                    deleteFile,
                                                    sendAvatar,
                                                    sendUserInformation,
                                                    loading,
                                                    previewImg,
                                                    avatarUrl,
                                                    nameInput,
                                                    aboutUserInput,
                                                    placeInput,
                                                    nameInputError,}) {



  return (
  <div className=''>
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
    );
}

const AvatarChange = ({fileUploadHandler, avatarUrl, classes}) => {
  return (
    <div className='Avatar-edit'>
      <div className='Avatar-edit__title'>
        Фотография
      </div>
      <div className='Avatar-edit__content'>
        <img className='Avatar-edit__photo' src={avatarUrl}/>
        <div>
          <input
            accept="image/*"
            type="file"
            onChange={(event) => fileUploadHandler(event)}
          />
          <button>Изменить фото профиля</button>
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
