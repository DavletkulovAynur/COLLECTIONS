import React, {useState} from 'react'
import {useInput} from 'Common/utils/hooks/input.hook'
import {useDispatch} from 'react-redux'
import {loginAction} from '../../../../Redux/actions/action'
import Input from "../../../../Common/components/Input/Input";
import Button from '@material-ui/core/Button';

export const Login = ({changeStateLogin}) => {
  const dispatch = useDispatch()
  const [disabledButton, setDisabledButton] = useState(false)

  const handleLogin = (e) => {
    const user = {
      email: login.value,
      password: password.value
    }

    setDisabledButton(true)
    dispatch(loginAction(user))
    e.preventDefault()
  }

  const login = useInput('')
  const password = useInput('')

  return (
    <div className='login'>
      <div className='header'>
        <div className='title'>Войти</div>
      </div>

      <form className='body'>
        <div className='input-wrapper'>
          <Input binding={login} label='Email'/>
        </div>
        <div className='input-wrapper'>
          <Input binding={password} label='Password'/>
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
