import React, {useEffect, useState} from 'react'
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
  const [disabledButton, setDisabledButton]= useState(true)

  useEffect(() => {
    if(userName !== nameInput.value || description !== aboutUserInput.value) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }

  }, [nameInput, aboutUserInput, profileLoading])

  const returnInitialState = () => {
    nameInput.changeInitialState(userName)
    aboutUserInput.changeInitialState(description)
    placeInput.changeInitialState(place)
    setDisabledButton(true)
  }

  const inputs = [
    {
      text: 'Имя пользователя',
      binding: nameInput,
      placeholder: 'Имя пользователя'
    },
    {
      text: 'О себе',
      binding: aboutUserInput,
      placeholder: 'Расскажите немного о себе'
    },
  ]

  function handleClick() {
    sendUserInformation(nameInput, placeInput, aboutUserInput)
  }

  return (
    <section className='Editing-profile'>

      {inputs.map((item, index) => {
        const {text, binding, placeholder} = item
        return (
          <div key={index} className='Editing-profile__input-box'>
            <span className='Editing-profile__input-designation'>{text}</span>
            <div className='Editing-profile__input'>
              <Input placeholder={placeholder} binding={binding}/>
            </div>
          </div>
        )
      })}

      <div className='Editing-profile__buttons'>
        <button disabled={disabledButton} className='Editing-profile__button Button Button-root Button_undo-actions' onClick={() => returnInitialState()}>
          Сбросить
        </button>
        <button disabled={disabledButton} className='Editing-profile__button Button Button-root' onClick={handleClick}>
          Готово
        </button>
      </div>
    </section>
    );
}


