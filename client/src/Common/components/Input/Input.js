import React from 'react';
import {makeStyles, TextField} from "@material-ui/core";

const Input = ({error = '',
               binding,
               label,
               requiredTest,
               multiline = false,
               rows = 1 }) => {

    const classes = useStyles();

    return (
        <>
            <TextField error={error}
                       {...binding.bind}
                       name='test'
                       required={requiredTest}
                       multiline={multiline}
                       rows={rows}
                       id="filled-basic"
                       label={label}
                       variant="filled"
                       InputLabelProps={{className: classes.multilineColor}}
                       classes={{root: classes.root}}
                       InputProps={{className: classes.input}}
            />
        </>
    );
}

export default Input

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgba(256, 256, 256, 0.2);',
        borderRadius: 4,
        width: '100%'
    },
    label: {
        textTransform: 'capitalize',
        color: 'white'
    },
    multilineColor:{
        color:'white'
    },
    input: {
        color: 'white'
    }
}))