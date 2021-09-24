import {useState} from "react";

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  const changeInitialState = (a = '') => setValue(a)

  return {
    bind: {value, onChange},
    value,
    clear,
    changeInitialState
  }
}
