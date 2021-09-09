import React, {useState} from 'react';
import './Input.scss'

const Input = ({error = '',
               binding,
               label,
               requiredTest,
               multiline = false,
               rows = 1,
                password}) => {

    const [showPassword, setShowPassword] =useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  // const inputClear = () => {
  //
  // }

  const errorStyle = error ? 'Input__error' : ''

  return (
      <div className={`Input ${errorStyle}`}>
        <div className={`Input_box`}>
            <input {...binding.bind} className='Input_input' type="text" required/>
            <span className="Input_highlight"></span>
            <span className="Input_bar"></span>
            <label className='Input_label'>{label}</label>
        </div>
      </div>
  );
}

export default Input

