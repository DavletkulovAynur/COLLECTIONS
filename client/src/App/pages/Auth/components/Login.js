import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginAction} from '../../../../Store/actions/action'
import {validationInputs} from '../../../../Common/utils/checkForm'
import LoginTemplate from "./LoginTemplate";

export const Login = ({changeStateLogin}) => {
  const dispatch = useDispatch()
  const [inputErrors, SetInputErrors] = useState({})

  const sendingUser = (user) => {
    dispatch(loginAction(user))
  }

  const handleLogin = (event, emailInput, passwordInput) => {
    event.preventDefault()
    const user = {
      email: emailInput.value,
      password: passwordInput.value
    }
    const thereAreMistakesInInputs = validationInputs(user)
    SetInputErrors(thereAreMistakesInInputs)
    // TODO придумать сокращение
    if(Object.keys(thereAreMistakesInInputs).length == 0) {
      sendingUser(user)
    }
  }

  return (
    <LoginTemplate changeStateLogin={changeStateLogin} handleLogin={handleLogin} inputErrors={inputErrors}/>
  )
}


