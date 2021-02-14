import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [ready, setReady] = useState(false)
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [userName, setUserName] = useState('')

  const login = useCallback((jwtToken, id, userName, bookmark) => {
    setToken(jwtToken)
    setUserId(id)
    setUserName(userName)

    localStorage.setItem('token', jwtToken)
    localStorage.setItem(storageName, JSON.stringify({
      token: jwtToken,
      userId: id,
      userName
    }))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setUserName('')
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if(data && data.token) {
      login(data.token, data.userId, data.userName)
    }

    setReady(true)
  }, [login])

  return {
    login, logout, token, userId, ready, userName
  }
}
