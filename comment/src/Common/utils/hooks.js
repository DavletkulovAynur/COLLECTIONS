import {useMemo, useState} from 'react'
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom'
import queryString from 'query-string'


export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const onChange = (event) => {
    setValue(event.target.value)
  }
  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params
      },
      match,
      location,
      history
    };
  }, [params, match, location, history]);
}
