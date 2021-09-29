import {validateEmail} from './validateEmail'

export function validationInputs(inputs = {}) {
  const listInputsHaveError = checkForm(inputs)
  return listInputsHaveError
}

export function checkForm(data) {
  let entries
  Array.isArray(data) ? entries = data : entries = Object.entries(data)
  const errorInputs = {}

  entries.forEach(([key, value]) => {
    switch (key) {
      case 'email':
        if(!value || !validateEmail(value)) {
          errorInputs[key+'Error'] = true
        }
        break
      case 'password':
        if(!value) {
          errorInputs[key+'Error'] = true
        }
        break
      case 'username':
        if(!value) {
          errorInputs[key+'Error'] = true
        }
        break
      case 'place':
        if(!value) {
          errorInputs[key+'Error'] = true
        }
        break
      case 'title':
        if(!value) {
          errorInputs[key+'Error'] = true
        }
        break
      default:
    }
  })

  return errorInputs
}