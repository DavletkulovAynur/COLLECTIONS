import React from 'react'
import {useInput} from 'Common/utils/hooks'

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
      <div className='popup-header'>
        <div className='popup-header__title'>Sign in</div>
        <div className='popup-header__close'></div>
      </div>
      <form className='popup-body' onSubmit={handleLogin}>
        <input id="email" type="email" className="validate" placeholder='Email' className='' {...login.bind}/>
        <input id="password" type="password" className="validate" placeholder='Password'
               className='com-input-styles' {...password.bind}/>
        <input type='submit' className="button btn waves-effect waves-teal" value='войти'/>
      </form>

      <div className='popup-footer'>
        Нет аккаунта? <span onClick={() => changeStateLogin()}>Регистрация</span>
      </div>
    </div>
  )
}
