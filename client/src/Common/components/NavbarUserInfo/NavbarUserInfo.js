import React, {useContext, useEffect, useState} from 'react'
import logout from 'Common/assets/images/logout.svg'
import user from 'Common/assets/images/icons/user.svg'
import './NavbarUserInfo.scss'
import {AuthContext} from '../../../App/context/AuthContext'
import {useComponentVisible} from '../../utils/hooks/useComponentVisible'
import {Link} from 'react-router-dom'
import {User} from '../User/User'

export function NavbarUserInfo() {
  const {userName} = useContext(AuthContext)
  const [userDetails, setUserDetails] = useState(false)

  const { ref, isComponentVisible } = useComponentVisible(false);

  useEffect(() => {
    console.log(isComponentVisible)
  }, [isComponentVisible])

  return (
    <div  ref={ref}>
      <article className='user-container'  className='user-icon'>
        <User component='Header' name={userName} styleName='User-header'/>
        <span className='arrow'></span>
      </article>
      <div>
        {isComponentVisible && (
          <div  className='Navbar-user-info'>
            <div className='root'>

              <ul className='menu-list'>
                <li className='sign-in-text'>
                  <p>
                    Signed in as <br/>
                    <span>{userName}</span>
                  </p>
                </li>

                <li>
                  {LinkItem('личный кабинет', user)}
                </li>

                <li className='menu-item'>
                  {LinkItem('выйти', logout)}
                </li>
              </ul>

            </div>
          </div>
        )}
      </div>
    </div>


  )
}

function LinkItem(text, icon) {
  return (
    <Link to='/personal-area'>
    <article className='link'>
      <span className='icon'>
        <img src={icon} alt=""/>
      </span>
      <span className='text'>{text}</span>
    </article>
    </Link>
  )
}
