import React from 'react'
import {useSelector} from 'react-redux'
import './Users.scss'


export function Users() {
  const users = useSelector(state => state.usersReducer)
  return (
    <div className='Users'>
      {users.map((user) => {
        return (
          <div className='Users__user'>
            <div className='user-img'>

            </div>
            <div className='user-name'>
              {user.username}
            </div>
          </div>
        )
      })}
    </div>
  )
}
