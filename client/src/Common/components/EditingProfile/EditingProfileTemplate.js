import React from 'react'
import './EditingProfile.scss'
import {Loading} from '../Loading/Loading'
import Input from '../Input/Input'
import {useInput} from "../../utils/hooks/input.hook";






export default function EditingProfileTemplate({fileUploadHandler,
                                                    deleteFile,
                                                 changeUserAvatar,
                                                    sendUserInformation,
                                                    loading,
                                                    previewImg,
                                                    avatarUrl,
                                                 userName, description, place,
                                                    nameInputError,}) {



  const nameInput = useInput(userName)
  const aboutUserInput = useInput(description)
  const placeInput = useInput(place)

  return (
  <div className=''>
    <UserInformation
                  nameInputError={nameInputError}
                  nameInput={nameInput}
                  aboutUserInput={aboutUserInput}
                  placeInput={placeInput}
                  sendUserInformation={sendUserInformation}/>


  </div>
    );
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


