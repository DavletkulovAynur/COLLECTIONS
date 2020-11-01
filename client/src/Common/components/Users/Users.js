import React, {useContext} from 'react'
import {useSelector} from 'react-redux'
import './Users.scss'
import {User} from "Common/shared/User";
import {AuthContext} from "App/context/AuthContext";


export function Users() {
  const users = useSelector(state => state.usersReducer)
  const auth = useContext(AuthContext)
  console.log(users)
  return (
    <div className='Users'>
      {users.map((user) => {
        if(user._id == auth.userId) {
          return
        }
        return (
          <User name={user.username}/>
        )
      })}
    </div>
  )
}
