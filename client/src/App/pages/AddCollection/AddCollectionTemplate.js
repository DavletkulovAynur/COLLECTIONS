import React, {useState} from 'react'
import {InputBase, makeStyles, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';

import {DragAndDrop} from '../../../Common/components/DragAndDrop/DragAndDrop';




const AddCollectionTemplate = ({title, errorTitle, errorFiles,
                                 publisher,
                                 description,
                                 saveImages,
                                 handleSubmit}) => {


  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   console.log(age)
  // };

    const classes = useStyles();

  return (
    <div className='Add-collection'>
      <h1>ПУБЛИКАЦИЯ</h1>
      <div className='form'>
        <form>
          <DragAndDrop errorFiles={errorFiles} saveImages={saveImages}/>

          <div className='wrapper-text-field'>
            <TextField error={errorTitle}  {...title.bind}  name='test' required
                        id="filled-basic"
                        label="title" variant="filled"
                        InputLabelProps={{className: classes.multilineColor}}
                        classes={{root: classes.root}}
                        InputProps={{className: classes.input}}/>
          </div>

          <div className='wrapper-text-field'>
            <TextField {...publisher.bind} id="filled-basic"
                       label="publisher"
                       variant="filled"
                       InputLabelProps={{className: classes.multilineColor}}
                       classes={{root: classes.root}}
                       InputProps={{className: classes.input}}/>
          </div>

          {/*<div>*/}
          {/*  <FormControl variant="filled" className={classes.formControl}>*/}
          {/*  <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>*/}
          {/*  <Select*/}
          {/*      labelId="demo-simple-select-filled-label"*/}
          {/*      id="demo-simple-select-filled"*/}
          {/*      value={age}*/}
          {/*      onChange={handleChange}*/}
          {/*  >*/}
          {/*    <MenuItem value="">*/}
          {/*      <em>None</em>*/}
          {/*    </MenuItem>*/}
          {/*    <MenuItem value={10}>Ten</MenuItem>*/}
          {/*    <MenuItem value={20}>Twenty</MenuItem>*/}
          {/*    <MenuItem value={30}>Thirty</MenuItem>*/}
          {/*  </Select>*/}
          {/*</FormControl>*/}
          {/*</div>*/}

          <div className='wrapper-text-field'>
            <TextField {...description.bind}
                       id="filled-multiline-static"
                       label="description"
                       multiline
                       rows={4}
                       placeholder="Default Value"
                       variant="filled"
                       classes={{root: classes.root}}/>
          </div>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            size="large"
            onClick={() => handleSubmit()}>
            ОТПРАВИТЬ
          </Button>
        </form>
      </div>
    </div>
  );
};


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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

export default AddCollectionTemplate;
