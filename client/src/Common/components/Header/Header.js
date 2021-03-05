import React, {useContext, useState} from 'react'
import './Header.scss'
import {useHistory} from 'react-router-dom'
import {HeaderTemplate} from './Header.template'

export function Header() {
  const history = useHistory()


  const logoutHandler = (e) => {
    e.preventDefault()

    history.push('/login')
  }

    return (
      <HeaderTemplate logoutHandler={logoutHandler}/>
    )
}

