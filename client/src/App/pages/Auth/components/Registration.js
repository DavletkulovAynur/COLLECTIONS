import React from 'react'
import {useInput} from 'Common/utils/hooks/input.hook'
import Button from "Common/components/Button/Button";
import {useDispatch} from "react-redux";
import {registrationAction} from "../../../../Redux/actions/action";
import Input from "../../../../Common/components/Input/Input";

export const Registration = ({changeStateLogin}) => {
    const dispatch = useDispatch()

  const username = useInput('')
  const email = useInput('')
  const password = useInput('')

  const handleAuth = (e) => {
    const user = {
      username: username.value,
      email: email.value,
      password: password.value
    }

    dispatch(registrationAction(user))
    e.preventDefault()
  }

  return (
    <div>
      <div className='header'>
        <div className='title'>Sign up for your account</div>
      </div>

      <form className='body'>
        <input className='com-input-styles' placeholder='name' required {...username.bind}/>
        {/*<Input error={loginError} binding={email} label='Email'/>*/}
        <input className='com-input-styles' placeholder='password' required {...password.bind}/>
        <Button name='Sign up' logoutHandler={handleAuth}></Button>
      </form>

      <div className='footer'>
        Already have an account? <span className='link' onClick={() => changeStateLogin()}>Log In</span>
      </div>
    </div>
  )
}
