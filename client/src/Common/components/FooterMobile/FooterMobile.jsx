import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './FooterMobile.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useRouter } from 'Common/utils/hooks/useRouter.hook'

export function FooterMobile() {
const {hiddenMobileFooter} = useSelector(state => state.mobileFooterReducer)
const router = useRouter()

return (
    <>
      {!hiddenMobileFooter
        ? <div className='Footer-mobile'>
          <div className='icons-wrapper'>
            <Link className='Footer-mobile__icon' to='/'>
              <FontAwesomeIcon icon='home' color={`${router.pathname === '/' ? '#e60023' : '#fff'} `} />
            </Link>
            <Link className='Footer-mobile__icon' to='/search-mobile'>
              <FontAwesomeIcon icon='search' color={`${router.pathname.includes('/search-mobile') ? '#e60023' : '#fff'} `}/>
            </Link>
            <Link className='Footer-mobile__icon' to='/add'>
              <FontAwesomeIcon icon='plus' color={`${router.pathname.includes('/add') ? '#e60023' : '#fff'} `}/>
            </Link>
            <Link className='Footer-mobile__icon' to='/personal-area'>
              <FontAwesomeIcon icon='user' color={`${router.pathname.includes('/personal-area') ? '#e60023' : '#fff'} `}/>
            </Link>
          </div>
      </div>

        : null

      }
      
    </>
  )
}