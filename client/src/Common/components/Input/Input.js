import React, {useState} from 'react';
import {makeStyles, TextField} from '@material-ui/core'
import './Input.scss'

import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({error = '',
               binding,
               label,
               requiredTest,
               multiline = false,
               rows = 1,
                password}) => {

    const classes = useStyles();

    const [showPassword, setShowPassword] =useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };


    return (
        <>
            <TextField error={!!error}
                       {...binding.bind}
                       required={requiredTest}
                       multiline={multiline}
                       rows={rows}
                       id="filled-basic"
                       label={label}
                       variant="filled"


                       InputLabelProps={{classes: {root: classes.test, focused: classes.test}}}
                       classes={{root: classes.root}}
                       InputProps={{
                         classes: {underline: classes.underline, input: classes.input},
                         endAdornment: (
                           password
                               ? <InputAdornment position="end">
                                    <IconButton
                                      color='inherit'
                                      aria-label="Toggle password visibility"
                                      onClick={handleClickShowPassword}
                                    >
                                    {  showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>
                              : null
                         ),
                       }}
            />
        </>
    );
}

export default Input

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'rgba(256, 256, 256, 0.2);',
      borderRadius: 4,
      width: '100%',
      color: '#fff'
    },
    label: {
      textTransform: 'capitalize',
      color: 'white',
    },
    multilineColor:{
      color:'#fff',
      '&::focused': {
        color: '#fff',
      }
    },
    test: {
        color: '#fff',
    },
    focused: {
        color: '#ffffff',
    },
    input: {
      color: 'white',
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #54585c inset",
        color: '#fff',
        WebkitTextFillColor: '#fff'
      }
    },
    underline: {
      // '&::after': {
      //   border: '1px solid #fff'
      // }
    }

}))