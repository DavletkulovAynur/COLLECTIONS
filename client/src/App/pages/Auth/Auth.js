import React, {useState} from 'react'

import {Login} from 'App/pages/Auth/components/Login'
import {Registration} from 'App/pages/Auth/components/Registration'

import './Auth.scss'

export function Auth() {

    const [login, setLogin] = useState(true)

    const changeStateLogin = () => {
        setLogin(!login)
      }

  return (
    <div className='Auth-root Auth'>
      <div className='Auth_name-project'>
        COLLECTION
      </div>

      <div className='Auth_forms'>
        {login
          ?   <Login changeStateLogin={changeStateLogin}/>
          :   <Registration changeStateLogin={changeStateLogin}/>}
      </div>
    </div>
  )
}

