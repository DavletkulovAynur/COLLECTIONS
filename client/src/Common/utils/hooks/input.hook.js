import {useState} from "react";

export function useInput(initialValue, func = () => {}) {
  const [value, setValue] = useState(initialValue)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onKeyPress = (event) => {
    if (event.code == 13) {
      func()
    }
  }

  const clear = () => setValue('')

  const changeInitialState = (a = '') => setValue(a)

  return {
    bind: {value, onChange, onKeyPress},
    value,
    clear,
    changeInitialState
  }
}
