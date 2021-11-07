import React, {useEffect, useState} from 'react'
import './InputForm.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const InputForm = ({label,
                    register,
                    placeholder,
                    required,
                    errors,
                    pattern,
                    minLength,
                    type = 'text'}) => {

  const [eyeView, setEyeView] = useState(false)

 let errorStyle = errors[label] ? 'error' : ''

  const inputIcon = () => {
    if(type === 'password') {
      return (
        <div onClick={() => setEyeView(!eyeView) } className='Input_icon'>
          <FontAwesomeIcon  icon={['fas', `${eyeView ? 'eye-slash' : 'eye'}`]} />
        </div>
      )
    }

  }

  const checkShowPassword = () => {
    return eyeView ? 'password': 'text'
  }

  return (
      <div className={`Input`}>
        <div className={`Input_box Input_box__${errorStyle}`}>
            <input placeholder={placeholder}
                   {...register(label, { required: required, pattern: pattern,  minLength: minLength})}
                   className='Input_input'
                   type={type !== 'password' ? type : checkShowPassword()}/>
            {inputIcon()}
        </div>
      </div>
  );
}

export default InputForm

