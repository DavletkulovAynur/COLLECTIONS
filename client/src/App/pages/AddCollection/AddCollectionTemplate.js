import React from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


import {DragAndDrop} from '../../../Common/components/DragAndDrop/DragAndDrop';
import Input from "../../../Common/components/Input/Input";

  const AddCollectionTemplate = ({title,
                                 errorTitle,
                                 publisher,
                                 description,
                                 handleSubmit}) => {

  return (
    <div className='Add-collection'>
      <h1>ПУБЛИКАЦИЯ</h1>
      <div className='form'>
        <form>
          <DragAndDrop/>
          <div className='wrapper-text-field'>
            <Input error={errorTitle} binding={title} label='title' requiredTest={true}/>
          </div>
          <div className='wrapper-text-field'>
            <Input binding={publisher} label='publisher' requiredTest={false}/>
          </div>
          <div className='wrapper-text-field'>
            <Input multiline={true} rows={4} binding={description} label='description' requiredTest={false}/>
          </div>

          <Button
            variant="contained"
            color="primary"
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


export default AddCollectionTemplate;
