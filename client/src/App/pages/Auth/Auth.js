import React, {useContext, useEffect, useState} from 'react'

import {AuthContext} from "App/context/AuthContext";
import {useHttp} from "Common/utils/hooks/http.hook";
import {useMessage} from "Common/utils/hooks/message.hook";
import {Login} from "App/pages/Auth/components/Login";
import {Registration} from "App/pages/Auth/components/Registration";

import './Auth.scss'
import {useDispatch, useSelector} from "react-redux";
import {writeUserName} from "Redux/actions/action";

export function Auth() {
  const message = useMessage()
  const {loading, error, request, clearError} = useHttp()
  const auth = useContext(AuthContext)
  const [login, setLogin] = useState(true)

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message])

  const fetchLogin = async (user) => {
    try {
      const data = await request('http://localhost:5000/auth/login', 'POST', user)
      const {token, userId} = data
      auth.login(token, userId, data.user.username)
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
    <div>
      <div className='Auth-popup'>
        {login
          ? <Login fetchLoginUser={fetchLogin} changeStateLogin={changeStateLogin}/>
          :  <Registration fetchRegistration={fetchRegistration} changeStateLogin={changeStateLogin}/>}
      </div>
    </div>
  )
}

