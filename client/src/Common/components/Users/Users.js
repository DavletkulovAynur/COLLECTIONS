import React from 'react'
import {useSelector} from 'react-redux'
import './Users.scss'
import {User} from "Common/shared/User";


export function Users() {
  const users = useSelector(state => state.usersReducer)
  return (
    <div className='Users'>
      {users.map((user) => {
        return (
          <User name={user.username}/>
        )
      })}
    </div>
  )
}
