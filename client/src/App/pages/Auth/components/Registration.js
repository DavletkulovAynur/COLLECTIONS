import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useInput} from 'Common/utils/hooks/input.hook'

import {registrationAction} from "../../../../Redux/actions/action";
import Input from '../../../../Common/components/Input/Input'
import {checkForm} from '../../../../Common/utils/checkForm'
import {inputClear} from '../../../../Common/utils/inputClear'



export const Registration = ({changeStateLogin}) => {
  const dispatch = useDispatch()

  const handleRegistration = (event, userName, email, password) => {
    const user = {
      username: userName.value,
      email: email.value,
      password: password.value
    }

    checkForm(user)
    registrationUser(user)
    inputClear([userName, email, password])
    event.preventDefault()
  }

  const registrationUser = (user) => {
    dispatch(registrationAction(user))
  }

  return (
    <RegistrationTemplate handleRegistration={handleRegistration} changeStateLogin={changeStateLogin}/>
  )
}

const RegistrationTemplate = ({handleRegistration, changeStateLogin}) => {
  const userName = useInput('')
  const email = useInput('')
  const password = useInput('')

  return (
    <div className='Auth_registration'>
      <form>
        <div className='Auth_input'>
          <Input binding={userName} label='name'/>
        </div>
        <div className='Auth_input'>
          <Input binding={email} label='Email'/>
        </div>
        <div className='Auth_input'>
          <Input binding={password} label='password'/>
        </div>
        <button onClick={(event) => handleRegistration(event, userName, email, password)}>
          Войти
        </button>
      </form>

      <div className='footer'>
        Already have an account? <span className='link' onClick={() => changeStateLogin()}>Log In</span>
      </div>
    </div>
  )
}
