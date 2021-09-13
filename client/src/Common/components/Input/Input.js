import React, {useState} from 'react';
import './Input.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Input = ({error = '',
               binding,
                placeholder,
               label,
               type = 'text'}) => {

  const [showPassword, setShowPassword] =useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const errorStyle = error ? 'error' : ''

  const inputIcon = () => {
    if(type === 'password') {
      return (
        <div>
          <FontAwesomeIcon icon="eye"/>
        </div>
      )
    }

  }

  return (
      <div className={`Input`}>
        <div className={`Input_box`}>
            <input placeholder={placeholder} {...binding.bind} className={`Input_input Input_input__${errorStyle}`}  type={type}/>
            {inputIcon()}
        </div>
      </div>
  );
}

export default Input

