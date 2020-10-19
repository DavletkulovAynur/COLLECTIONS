import React from 'react'
import {useSelector} from "react-redux";


export function Users() {
  const users = useSelector(state => state.usersReducer)
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            {user.username}
          </div>
        )
      })}
    </div>
  )
}
