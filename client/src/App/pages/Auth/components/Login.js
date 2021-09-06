import React, {useEffect, useState} from 'react'
import {useInput} from 'Common/utils/hooks/input.hook'
import {useDispatch, useSelector} from 'react-redux'
import {loginAction} from '../../../../Redux/actions/action'
import Input from '../../../../Common/components/Input/Input'

import {checkForm} from '../../../../Common/utils/checkForm'
import {inputClear} from '../../../../Common/utils/inputClear'

export const Login = ({changeStateLogin}) => {
  const dispatch = useDispatch()
  const {checkRegistration} = useSelector(state =>  state.authReducer)
  const [disabledButton, setDisabledButton] = useState(false)
  const emailInput = useInput('')
  const passwordInput = useInput('')
  const [loginError, setLoginError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleLogin = (e) => {
    const user = {
      email: emailInput.value,
      password: passwordInput.value
    }
    const objErrors = checkForm(user)
    const {email, password} = objErrors
    const errorСhecking = Object.keys(objErrors).length;

    setLoginError(email)
    setPasswordError(password)

    if(!errorСhecking) {
      dispatch(loginAction(user))
      inputClear([emailInput, passwordInput])
    }

    e.preventDefault()
  }

  useEffect(() => {
    if(checkRegistration) {
      setDisabledButton(true)
    } else {
      setDisabledButton(false)
      // подумать
      // alert('error')
    }
  }, [checkRegistration])



  return (
    <div className='Auth_login'>
      <form>
        <div className='Auth_input'>
          <Input error={loginError} binding={emailInput} label='Email'/>
        </div>
        <div className='Auth_input'>
          <Input error={passwordError} binding={passwordInput} label='Password' password={true}/>
        </div>
        <button disabled={disabledButton}  onClick={handleLogin}>
          Войти
        </button>
      </form>

      <div className='Auth_footer'>
        Can't log in? <span className='link' onClick={() => changeStateLogin()}> Sign up for an account</span>
      </div>
    </div>
  )
}
