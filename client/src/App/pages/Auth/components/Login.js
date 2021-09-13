import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginAction} from '../../../../Redux/actions/action'
import {checkForm} from '../../../../Common/utils/checkForm'
import {inputClear} from '../../../../Common/utils/inputClear'
import LoginTemplate from "./LoginTemplate";

export const Login = ({changeStateLogin}) => {
  const dispatch = useDispatch()
  const [inputErrors, SetInputErrors] = useState({})
  // для чего не понятно
  const {checkRegistration} = useSelector(state =>  state.authReducer)

  const handleLogin = (event, emailInput, passwordInput) => {
    event.preventDefault()
    const user = {
      email: emailInput.value,
      password: passwordInput.value
    }
    const thereAreMistakesInInputs = validationInputs(user)

    if(!thereAreMistakesInInputs) {
      sendingUser(user)
      inputClear([emailInput, passwordInput])
    }
  }

  const validationInputs = (user) => {
    const listInputsHaveError = checkForm(user)
    if(Object.keys(listInputsHaveError).length != 0) {
      informInputsAboutError(listInputsHaveError)
      return true
    } else {
      return false
    }
  }

  const informInputsAboutError = (listInputsHaveError) => {
    SetInputErrors(listInputsHaveError)
  }

  const sendingUser = (user) => {
    dispatch(loginAction(user))
  }

  return (
    <LoginTemplate changeStateLogin={changeStateLogin} handleLogin={handleLogin} inputErrors={inputErrors}/>
  )
}


