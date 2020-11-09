import React, {useContext} from 'react'
import './Header.scss'
import {useHistory} from 'react-router-dom'
import {AuthContext} from 'App/context/AuthContext'
import Button from "Common/components/Button/Button";
import {User} from "Common/shared/User";

export function Header() {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = (e) => {
    e.preventDefault()
    auth.logout()
    history.push('/login')
  }

    return (
      <div className='Header'>
        <a className='logo' href="/"></a>

        <form className='search' >
          <input type="text" className="search-input" placeholder="Search"/>
        </form>

        <div className='user'>
          <User name={auth.userName} styleName='User-header'/>
        </div>


        <Button name=' Log out' logoutHandler={logoutHandler}/>
      </div>
    )
}
