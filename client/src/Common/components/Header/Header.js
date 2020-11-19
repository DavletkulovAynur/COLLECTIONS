import React, {useContext, useState} from 'react'
import './Header.scss'
import {useHistory} from 'react-router-dom'
import {AuthContext} from 'App/context/AuthContext'
import {User} from "Common/shared/User";
import {Navbar} from "Common/components/Navbar/Navbar";

export function Header() {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const [userDetails, setUserDetails] = useState(false)

  const logoutHandler = (e) => {
    e.preventDefault()
    auth.logout()
    history.push('/login')
  }

  const detailsUserOpen = () => {
    setUserDetails(!userDetails)
  }

    return (
      <div className='Header'>
        <a className='logo' href="/"></a>

        <form className='search'>
          <input type="text" className="search-input" placeholder="Search"/>
        </form>
        <div className='user-container' onClick={detailsUserOpen}>
          <article className='user-icon'>
            <User component='Header' name={auth.userName} styleName='User-header'/>
            <span className='arrow'></span>
          </article>
          {userDetails ? <Navbar/> : null}
        </div>
      </div>
    )
}

