import React from 'react'
import './EditingProfile.scss'
import Input from '../Input/Input'
import {useInput} from "../../utils/hooks/input.hook";






export default function EditingProfileTemplate({  sendUserInformation,
                                                  userName,
                                                  description,
                                                  place,
                                                  profileLoading
                                               })
{
  const nameInput = useInput(userName)
  const aboutUserInput = useInput(description)
  const placeInput = useInput(place)

  const returnInitialState = () => {
    nameInput.changeInitialState(userName)
    aboutUserInput.changeInitialState(description)
    placeInput.changeInitialState(place)
  }

  return (
    <section className='Editing-profile'>
      <div className='Editing-profile__input-box'>
        <span className='Editing-profile__input-designation'>Имя пользователя</span>
        <div className='Editing-profile__input'>
          <Input placeholder='Имя пользователя' binding={nameInput} label='Имя пользователя'/>
        </div>
      </div>
      <div className='Editing-profile__input-box'>
        <span className='Editing-profile__input-designation'>Откуда</span>
        <div className='Editing-profile__input'>
          <Input placeholder='Откуда' binding={placeInput}/>
        </div>
      </div>
      <div className='Editing-profile__input-box'>
        <span className='Editing-profile__input-designation'>О себе</span>
        <div className='Editing-profile__input'>
          <Input placeholder='Расскажите немного о себе' binding={aboutUserInput}/>
        </div>
      </div>

      <div className='Editing-profile__buttons'>
        <button className='Editing-profile__button Button Button-root Button_cancel' onClick={() => returnInitialState()}>
          Отмена
        </button>
        <button disabled={profileLoading} className='Editing-profile__button Button Button-root' onClick={() => sendUserInformation(nameInput, placeInput, aboutUserInput)}>
          Готово
        </button>
      </div>
    </section>
    );
}


