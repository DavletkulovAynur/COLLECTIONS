import React from 'react'
import {useInput} from 'Common/utils/hooks'

export const Registration = ({fetchRegistration, changeStateLogin}) => {
  const inputLogin = useInput('')
  const inputPassword = useInput('')

  const handleAuth = (e) => {
    const user = {
      email: inputLogin.value,
      password: inputPassword.value
    }
    fetchRegistration(user)
    e.preventDefault()
  }
  return (
    <div>
      <div className='popup-header'>
        <div className='popup-header__title'>Sign up</div>
        <div className='popup-header__close'></div>
      </div>
      <form className='popup-body' onSubmit={handleAuth}>
        <input className="validate" placeholder='Email' required {...inputLogin.bind}/>
        <input className='com-input-styles' placeholder='password' required {...inputPassword.bind}/>
        <input type='submit' value='login'/>
      </form>
      <div className='popup-footer'>
        Есть аккаунт? <span onClick={() => changeStateLogin()}>Войти</span>
      </div>
    </div>
  )
}
