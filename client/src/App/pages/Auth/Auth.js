import React, {useContext, useEffect, useState} from 'react'

import {AuthContext} from "App/context/AuthContext";
import {useHttp} from "Common/utils/hooks/http.hook";
import {useMessage} from "Common/utils/hooks/message.hook";
import {Login} from "App/pages/Auth/components/Login";
import {Registration} from "App/pages/Auth/components/Registration";

import './Auth.scss'

export function Auth() {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {error, request, clearError} = useHttp()

  const [login, setLogin] = useState(true)

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message])

  const fetchLogin = async (user) => {
    try {
      const data = await request('http://localhost:5000/auth/login', 'POST', user)
      const {token, userId} = data
      const {username} = data.user
      auth.login(token, userId, username)
    } catch (e) {
      console.log(e)
    }
  }

  const fetchRegistration = async (user) => {
    try {
      const data = await request('http://localhost:5000/auth/register', 'POST', user)
      message(data.message);
    } catch (e) {
      console.log(e)
    }
  }

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
          ? <Login fetchLoginUser={fetchLogin} changeStateLogin={changeStateLogin}/>
          :  <Registration fetchRegistration={fetchRegistration} changeStateLogin={changeStateLogin}/>}
      </div>
    </div>
  )
}

