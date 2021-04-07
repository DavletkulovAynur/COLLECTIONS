import {validateEmail} from './validateEmail'

export function checkForm(data) {
  const entries = Object.entries(data);
  let stateError = false
  const errorInputs = {}

  // проверка на email и password
  entries.forEach(([key, value]) => {
    switch (key) {
      case 'email':
        if(!value || !validateEmail(value)) {
          errorInputs[key] = true
          stateError = true
        }
        break
      case 'password':
        if(!value) {
          errorInputs[key] = true
          stateError = true
        }
        break
      default:
    }
  })

  return errorInputs
}