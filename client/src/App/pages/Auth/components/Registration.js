import React from 'react'
import {useInput} from 'Common/utils/hooks/input.hook'

export const Registration = ({fetchRegistration, changeStateLogin}) => {
  const username = useInput('')
  const email = useInput('')
  const password = useInput('')

  const handleAuth = (e) => {
    const user = {
      username: username.value,
      email: email.value,
      password: password.value
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
        <input className="validate" placeholder='name' required {...username.bind}/>
        <input className="validate" placeholder='Email' required {...email.bind}/>
        <input className='com-input-styles' placeholder='password' required {...password.bind}/>
        <input type='submit' value='login'/>
      </form>
      <div className='popup-footer'>
        Есть аккаунт? <span onClick={() => changeStateLogin()}>Войти</span>
      </div>
    </div>
  )
}
