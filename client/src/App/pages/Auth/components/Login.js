import React, {useEffect, useState} from 'react'
import {useInput} from 'Common/utils/hooks/input.hook'
import {useDispatch, useSelector} from 'react-redux'
import {loginAction} from '../../../../Redux/actions/action'
import Input from '../../../../Common/components/Input/Input'
import {checkForm} from '../../../../Common/utils/checkForm'
import {inputClear} from '../../../../Common/utils/inputClear'

export const Login = ({changeStateLogin}) => {
  const dispatch = useDispatch()
  const [inputErrors, SetInputErrors] = useState({})
  // для чего не понятно
  const {checkRegistration} = useSelector(state =>  state.authReducer)

  const handleLogin = (event, emailInput, passwordInput) => {
    event.preventDefault()
    const user = {
      email: emailInput.value,
      password: passwordInput.value
    }
    const thereAreMistakesInInputs = validationInputs(user)

    if(!thereAreMistakesInInputs) {
      sendingUser(user)
      inputClear([emailInput, passwordInput])
    }
  }

  const validationInputs = (user) => {
    const listInputsHaveError = checkForm(user)
    if(Object.keys(listInputsHaveError).length != 0) {
      informInputsAboutError(listInputsHaveError)
      return true
    } else {
      return false
    }
  }

  const informInputsAboutError = (listInputsHaveError) => {
    SetInputErrors(listInputsHaveError)
  }

  const sendingUser = (user) => {
    dispatch(loginAction(user))
  }

  return (
    <LoginTemplate changeStateLogin={changeStateLogin} handleLogin={handleLogin} inputErrors={inputErrors}/>
  )
}

const LoginTemplate = ({changeStateLogin, handleLogin, inputErrors}) => {
  const emailInput = useInput('')
  const passwordInput = useInput('')
  const [emailInputError, SetEmailInputError] = useState(false)
  const [passwordInputError, SetPasswordInputError] = useState(false)


  useEffect(() => {
    errorDistributor(inputErrors)
  }, [inputErrors])

  const errorDistributor = (inputErrors) => {
    for(let value of Object.keys(inputErrors)) {
      if(value == 'emailError') {
        SetEmailInputError(true)
      }
      if(value == 'passwordError') {
        SetPasswordInputError(true)
      }
    }
  }

  return (
    <div className='Auth_login'>
      <form>
        <div className='Auth_input'>
          <Input error={emailInputError} binding={emailInput} label='Email'/>
        </div>
        <div className='Auth_input'>
          <Input type='password' error={passwordInputError} binding={passwordInput} label='Password' password={true}/>
        </div>
        <button onClick={(event) => handleLogin(event, emailInput, passwordInput)}>
          Войти
        </button>
      </form>

      <div className='Auth_footer'>
        Can't log in? <span className='link' onClick={() => changeStateLogin()}> Sign up for an account</span>
      </div>
    </div>
  )
}
