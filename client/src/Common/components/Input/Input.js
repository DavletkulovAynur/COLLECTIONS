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

    const inputClear = () => {

    }

    console.log(error)

    const errorStyle = error ? 'Input-root__error' : ''

    return (
        <div className={`Input-root ${errorStyle}`}>
          <div className={`input-group`}>
              <input {...binding.bind} className='input-group_input' type="text" required/>
              <span className="input-group_highlight"></span>
              <span className="input-group_bar"></span>
              <label>{label}</label>
          </div>
        </div>
    );
}

export default Input

