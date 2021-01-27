import React, {useContext} from 'react'
import {useSelector} from 'react-redux'
import './Users.scss'
import {AuthContext} from "App/context/AuthContext";
import {User} from '../User/User'


export function Users() {
  const users = useSelector(state => state.usersReducer)
  const auth = useContext(AuthContext)
  return (
    <div className='Users'>
      {users.map((user) => {
        if(user._id === auth.userId) {
          return null
        }
        return (
          <User key={user._id} name={user.username}/>
        )
      })}
    </div>
  )
}
