import React, {useState} from 'react'
import {useDispatch} from 'react-redux'


import {registrationAction} from "../../../../Redux/actions/action";

import {checkForm} from '../../../../Common/utils/checkForm'
import {inputClear} from '../../../../Common/utils/inputClear'
import RegistrationTemplate from "./RegistrationTemplate";



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


