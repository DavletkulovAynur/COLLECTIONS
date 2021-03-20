import React, {useEffect, useState} from 'react'

import {Login} from 'App/pages/Auth/components/Login'
import {Registration} from 'App/pages/Auth/components/Registration'

import './Auth.scss'

export function Auth() {

    const [login, setLogin] = useState(true)

    const changeStateLogin = () => {
        setLogin(!login)
      }

  return (
    <div className='Auth'>

      <div className='logo'>
        <div className='img'></div>
        <span className='text'>COLLECTION</span>
      </div>

      <div className='login-registration-wrapper'>
        {login
          ? <Login changeStateLogin={changeStateLogin}/>
          :  <Registration changeStateLogin={changeStateLogin}/>}
      </div>
    </div>
  )
}

