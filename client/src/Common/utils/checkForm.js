import {validateEmail} from './validateEmail'

export function checkForm(data) {
  const entries = Object.entries(data);
  const errorInputs = {}

  entries.forEach(([key, value]) => {
    switch (key) {
      case 'email':
        if(!value || !validateEmail(value)) {
          errorInputs[key] = true
        }
        break
      case 'password':
        if(!value) {
          errorInputs[key] = true
        }
        break
      case 'username':
        if(!value) {
          errorInputs[key] = true
        }
        break
      default:
    }
  })

  return errorInputs
}