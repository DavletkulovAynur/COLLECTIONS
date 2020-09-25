import React, {useContext} from 'react'
import './AuthPopup.scss'
import {useInput} from "../../utils/hooks"
import Fetcher from "Common/utils/fetch";
import {AuthContext} from "../../../App/context/AuthContext";
import {useHttp} from "../../utils/hooks/http.hook";

export function AuthPopup() {
  const {loading, error, request, clearError} = useHttp()
  const auth = useContext(AuthContext)
  const inputLogin = useInput('')
  const inputPassword = useInput('')

  const login = useInput('')
  const password = useInput('')

  const fetchAuthUser = async (user) => {
    try {
      const data = await Fetcher('http://localhost:5000/auth/register', 'POST', user)
    } catch (e) {
      console.log(e)
    }
  }

  const fetchLoginUser = async (user) => {
    try {
      const data = await request('http://localhost:5000/auth/login', 'POST', user)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  const handleAuth = (e) => {
    const user = {
      email: inputLogin.value,
      password: inputPassword.value
    }
    fetchAuthUser(user)
    e.preventDefault()
  }

  const handleLogin = (e) => {
    const user = {
      email: login.value,
      password: password.value
    }
    fetchLoginUser(user)
    e.preventDefault()
  }

  return (
    <div className='Auth-popup'>
      <h1>AUTH - POPUP</h1>
      <form onSubmit={handleAuth}>
        <input className='com-input-styles' {...inputLogin.bind}/>
        <input className='com-input-styles' {...inputPassword.bind}/>
        <input type='submit' value='login'/>
      </form>
      <h1>ВОЙТИ</h1>
      <form onSubmit={handleLogin}>
        <input className='com-input-styles' {...login.bind}/>
        <input className='com-input-styles' {...password.bind}/>
        <input type='submit' value='войти'/>
      </form>
    </div>
  )
}
