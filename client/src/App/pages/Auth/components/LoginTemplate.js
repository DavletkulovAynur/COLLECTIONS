import {useInput} from "../../../../Common/utils/hooks/input.hook";
import React, {useEffect, useState} from "react";
import Input from "../../../../Common/components/Input/Input";

const LoginTemplate = ({changeStateLogin, handleLogin, inputErrors}) => {
  const emailInput = useInput('')
  const passwordInput = useInput('')
  const [emailInputError, SetEmailInputError] = useState(false)
  const [passwordInputError, SetPasswordInputError] = useState(false)


  useEffect(() => {
    errorDistributor(inputErrors)
  }, [inputErrors])

  const errorDistributor = (inputErrors) => {
    for(let value of Object.keys(inputErrors)) {
      if(value == 'emailError') {
        SetEmailInputError(true)
      }
      if(value == 'passwordError') {
        SetPasswordInputError(true)
      }
    }
  }

  return (
    <div className='Auth_login'>
      <h2 className='Auth_title'>
        Вход
      </h2>
      <form>
        <div className='Auth_input'>
          <Input placeholder='Эл. почта' type='email' error={emailInputError} binding={emailInput} label='Email'/>
        </div>
        <div className='Auth_input'>
          <Input placeholder='Пароль' type='password' error={passwordInputError} binding={passwordInput} label='Password'/>
        </div>
        <button className='Button-root Button' onClick={(event) => handleLogin(event, emailInput, passwordInput)}>
          Войти
        </button>
      </form>

      <div className='Auth_footer'>
        Еще нет аккаунта? <span className='link' onClick={() => changeStateLogin()}>Создать</span>
      </div>
    </div>
  )
}

export default LoginTemplate