import {useState, useCallback} from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      console.log(body)
      if (body) {
        if(headers['Content-Type'] === 'multipart/form-data') {
          console.log('multipart/form-data')
        } else {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }
      }

      const response = await fetch(url, {method, body, headers})
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
      }

      setLoading(false)

      return data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return {loading, request, error, clearError}

}
