import React from 'react'
import {useInput} from 'Common/utils/hooks/input.hook'
import Button from "Common/components/Button/Button";

export const Login = ({fetchLoginUser, changeStateLogin}) => {
  const handleLogin = (e) => {
    const user = {
      email: login.value,
      password: password.value
    }
    fetchLoginUser(user)
    e.preventDefault()
  }

  const login = useInput('')
  const password = useInput('')

  return (
    <div className='login'>
      <div className='header'>
        <div className='title'>Log in to Collection</div>
      </div>

      <form className='body'>
        <input id="email" type="email" className="com-input-styles" placeholder='Email'  {...login.bind}/>
        <input id="password" type="password" placeholder='Password'
               className='com-input-styles' {...password.bind}/>
        <Button logoutHandler={handleLogin} name='Log in'></Button>
      </form>

      <div className='footer'>
        Can't log in? <span className='link' onClick={() => changeStateLogin()}> Sign up for an account</span>
      </div>
    </div>
  )
}
