import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useInput} from 'Common/utils/hooks/input.hook'

import {registrationAction} from "../../../../Redux/actions/action";
import Input from '../../../../Common/components/Input/Input'
import {checkForm} from '../../../../Common/utils/checkForm'
import {inputClear} from '../../../../Common/utils/inputClear'



export const Registration = ({changeStateLogin}) => {
  const dispatch = useDispatch()
  const userNameInput = useInput('')
  const emailInput = useInput('')
  const passwordInput = useInput('')
  const [loginError, setLoginError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [userNameError, setUserNameError] = useState(false)

  const handleAuth = (e) => {
    const user = {
      username: userNameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    }

    const objErrors = checkForm(user)
    const {email, password, username} = objErrors
    const errorСhecking = Object.keys(objErrors).length

    setLoginError(email)
    setPasswordError(password)
    setUserNameError(username)

      if(!errorСhecking) {
          dispatch(registrationAction(user))
          inputClear([userNameInput, emailInput, passwordInput])
      }


    e.preventDefault()
  }

  return (
    <div className='Auth_registration'>
      <div className='header'>
        <div className='title'>Регистрация</div>
      </div>

      <form>
        <div className='Auth_input'>
          <Input error={userNameError} binding={userNameInput} label='name'/>
        </div>
        <div className='Auth_input'>
          <Input error={loginError} binding={emailInput} label='Email'/>
        </div>
        <div className='Auth_input'>
          <Input error={passwordError} binding={passwordInput} label='password'/>
        </div>
        <button onClick={handleAuth}>
          Войти
        </button>
      </form>

      <div className='footer'>
        Already have an account? <span className='link' onClick={() => changeStateLogin()}>Log In</span>
      </div>
    </div>
  )
}
