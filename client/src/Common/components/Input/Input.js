import React, {useState} from 'react';
import './Input.scss'

const Input = ({error = '',
               binding,
               label,
               type = 'text'}) => {

  const [showPassword, setShowPassword] =useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const errorStyle = error ? 'error' : ''

  return (
      <div className={`Input`}>
        <div className={`Input_box`}>
            <input placeholder='email' {...binding.bind} className={`Input_input Input_input__${errorStyle}`}  type={type}/>
        </div>
      </div>
  );
}

export default Input

