import React, {useEffect, useState} from 'react'
import {useInput} from 'Common/utils/hooks/input.hook'
import {useDispatch, useSelector} from 'react-redux'
import {loginAction} from '../../../../Redux/actions/action'
import Input from '../../../../Common/components/Input/Input'
import {checkForm} from '../../../../Common/utils/checkForm'
import {inputClear} from '../../../../Common/utils/inputClear'

export const Login = ({changeStateLogin}) => {
  const dispatch = useDispatch()
  // для чего не понятно
  const {checkRegistration} = useSelector(state =>  state.authReducer)

  const handleLogin = (emailInput, passwordInput) => {
    const user = {
      email: emailInput.value,
      password: passwordInput.value
    }
    // проверить на правильнось
    checkForm(user)
    sendingUser(user)
    inputClear([emailInput, passwordInput])
  }

  const sendingUser = (user) => {
    dispatch(loginAction(user))
  }

  // useEffect(() => {
  //   if(checkRegistration) {
  //     setDisabledButton(true)
  //   } else {
  //     setDisabledButton(false)
  //   }
  // }, [checkRegistration])



  return (
    <LoginTemplate changeStateLogin={changeStateLogin} handleLogin={handleLogin}/>
  )
}

const LoginTemplate = ({changeStateLogin, handleLogin}) => {
  const emailInput = useInput('')
  const passwordInput = useInput('')
  return (
    <div className='Auth_login'>
      <form>
        <div className='Auth_input'>
          <Input binding={emailInput} label='Email'/>
        </div>
        <div className='Auth_input'>
          <Input binding={passwordInput} label='Password' password={true}/>
        </div>
        <button onClick={() => handleLogin(emailInput, passwordInput)}>
          Войти
        </button>
      </form>

      <div className='Auth_footer'>
        Can't log in? <span className='link' onClick={() => changeStateLogin()}> Sign up for an account</span>
      </div>
    </div>
  )
}
