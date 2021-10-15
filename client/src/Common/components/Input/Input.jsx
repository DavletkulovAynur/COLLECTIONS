import React, {useEffect, useState} from 'react';
import './Input.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Input = ({error = '',
               binding,
                placeholder,
               type = 'text'}) => {

  const [eyeView, setEyeView] = useState(false)

 let errorStyle = error ? 'error' : ''

  // useEffect(() => {
  //   console.log('errore', error)
  //   errorStyle = error ? 'error' : ''
  // }, [error])

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

  // TODO нажатие на enter

  return (
      <div className={`Input`}>
        <div className={`Input_box Input_box__${errorStyle}`}>
            <input placeholder={placeholder}
                   {...binding.bind}
                   className='Input_input'
                   type={type !== 'password' ? type : checkShowPassword()}/>
            {inputIcon()}
        </div>
      </div>
  );
}

export default Input

