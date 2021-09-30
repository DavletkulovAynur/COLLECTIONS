import {useInput} from "../../../../Common/utils/hooks/input.hook";
import Input from "../../../../Common/components/Input/Input";
import React from "react";

const RegistrationTemplate = ({handleRegistration, changeStateLogin}) => {
  const userName = useInput('')
  const email = useInput('')
  const password = useInput('')

  return (
    <div className='Auth_registration'>
      <h2 className='Auth_title'>
        Новый аккаунт
      </h2>
      <form>
        <div className='Auth_input'>
          <Input placeholder='Имя пользователя'  binding={userName} label='name'/>
        </div>
        <div className='Auth_input'>
          <Input placeholder='Эл. почта' binding={email} label='Email'/>
        </div>
        <div className='Auth_input'>
          <Input type='password' placeholder='Пароль' binding={password} label='password'/>
        </div>
        <button className='Button Button-root' onClick={(event) => handleRegistration(event, userName, email, password)}>
          Создать
        </button>
      </form>

      <div className='Auth_footer'>
        У вас уже есть аккаунт?  <span className='link' onClick={() => changeStateLogin()}>Войти</span>
      </div>
    </div>
  )
}

export default RegistrationTemplate