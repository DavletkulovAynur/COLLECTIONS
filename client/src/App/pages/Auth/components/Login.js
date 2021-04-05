import React, {useEffect, useState} from 'react'
import {useInput} from 'Common/utils/hooks/input.hook'
import {useDispatch, useSelector} from 'react-redux'
import {loginAction} from '../../../../Redux/actions/action'
import Input from "../../../../Common/components/Input/Input";
import Button from '@material-ui/core/Button';
import {checkForm} from "../../../../Common/utils/checkForm";
import {inputClear} from "../../../../Common/utils/inputClear";

export const Login = ({changeStateLogin}) => {
  const dispatch = useDispatch()
  const {checkRegistration} = useSelector(state =>  state.authReducer)
  const [disabledButton, setDisabledButton] = useState(false)
  const login = useInput('')
  const passwordInput = useInput('')
  const [loginError, setLoginError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleLogin = (e) => {
    const user = {
      email: login.value,
      password: passwordInput.value
    }

    const objErrors = checkForm(user)
    const {email, password} = objErrors
    const errorСhecking = Object.keys(objErrors).length;

    setLoginError(email)
    setPasswordError(password)

    if(!errorСhecking) {
      dispatch(loginAction(user))
      inputClear([login, passwordInput])
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
    <div className='login'>
      <div className='header'>
        <div className='title'>Войти</div>
      </div>

      <form className='body'>
        <div className='input-wrapper'>
          <Input error={loginError} binding={login} label='Email'/>
        </div>
        <div className='input-wrapper'>
          <Input error={passwordError} binding={passwordInput} label='Password'/>
        </div>
        <Button
          disabled={disabledButton}
          variant="contained"
          color="primary"
          size="large"
          onClick={handleLogin}>
          Войти
        </Button>
      </form>

      <div className='footer'>
        Can't log in? <span className='link' onClick={() => changeStateLogin()}> Sign up for an account</span>
      </div>
    </div>
  )
}
