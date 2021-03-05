import React, {useState} from 'react'
import {InputBase, makeStyles, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import {DragAndDrop} from '../../../Common/components/DragAndDrop/DragAndDrop';


const AddCollectionTemplate = ({title, publisher,  description, saveImages, handleSubmit}) => {
  const classes = useStyles();


  return (
    <div className='Add-collection'>
      <h1>ПУБЛИКАЦИЯ</h1>
      <div className='form'>
        <form>
          <DragAndDrop saveImages={saveImages}/>
          <TextField  {...title.bind}  name='test' required  id="filled-basic" label="Title" variant="filled"
                     InputLabelProps={{className: classes.multilineColor}}
                     classes={{root: classes.root}}
                     InputProps={{className: classes.input}}/>
          <TextField {...publisher.bind} required id="filled-basic" label="publisher" variant="filled"
                     InputLabelProps={{className: classes.multilineColor}}
                     classes={{root: classes.root}}
                     InputProps={{className: classes.input}}/>
          <TextField {...description.bind} id="filled-multiline-static" label="description" multiline rows={4} placeholder="Default Value" variant="filled"
                     classes={{root: classes.root}}/>


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



const useStyles = makeStyles({
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
});

export default AddCollectionTemplate;
