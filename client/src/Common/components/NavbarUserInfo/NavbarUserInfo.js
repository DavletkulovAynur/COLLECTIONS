import React, {useContext, useEffect, useState} from 'react'
import logoutIcon from 'Common/assets/images/logout.svg'
import user from 'Common/assets/images/icons/user.svg'
import './NavbarUserInfo.scss'
import {AuthContext} from '../../../App/context/AuthContext'
import {useComponentVisible} from '../../utils/hooks/useComponentVisible'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";


// подумать над логикой
export function NavbarUserInfo() {
  const {avatar} = useSelector((state) => state.authReducer)
  const [userDetails, setUserDetails] = useState(false)

  const { ref, isComponentVisible } = useComponentVisible(false);

  useEffect(() => {

  }, [isComponentVisible])

  console.log(avatar.path)

  return (
    <div  ref={ref}>
      <article className='user-container'  className='user-icon'>
        <div className={`User User-header`}>
          <div className='img'></div>
          <img/>
        </div>
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
                    <span>Davletkulov</span>
                  </p>
                </li>

                <li>
                  {LinkItem('личный кабинет', user)}
                </li>

                <li className='menu-item'>
                  {/*{LinkItem('выйти', logoutIcon, logout)}*/}
                </li>
              </ul>

            </div>
          </div>
        )}
      </div>
    </div>


  )
}

function LinkItem(text, icon, func = () => {}) {
  return (
    <Link to='/personal-area'>
    <article className='link'>
      <span className='icon'>
        <img src={icon} alt=""/>
      </span>
      <span onClick={() => func()} className='text'>{text}</span>
    </article>
    </Link>
  )
}
