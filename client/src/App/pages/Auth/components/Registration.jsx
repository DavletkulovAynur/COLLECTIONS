import React from 'react'
import {useDispatch} from 'react-redux'


import {registrationAction} from "../../../../Store/actions/action"
import {inputClear} from '../../../../Common/utils/inputClear'
import RegistrationTemplate from './RegistrationTemplate'
import { useForm } from 'react-hook-form'



export const Registration = ({changeStateLogin}) => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
  );

  const handleRegistration = (dataInputs) => {
    const {username, email, password} = dataInputs
    const user = {
      username,
      email,
      password
    }
	
	
    registrationUser(user)
    
  }

  const onSubmit = (data) => {
	  handleRegistration(data)
  };

  const registrationUser = (user) => {
    dispatch(registrationAction(user))
  }

  return (
    <RegistrationTemplate errors={errors}
                          changeStateLogin={changeStateLogin} 
                          register={register} 
						              handleSubmit={handleSubmit}
						              onSubmit={onSubmit}/>
  )
}


