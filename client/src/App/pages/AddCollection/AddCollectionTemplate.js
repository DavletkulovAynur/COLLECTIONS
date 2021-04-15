import React from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


import {DragAndDrop} from '../../../Common/components/DragAndDrop/DragAndDrop';
import Input from "../../../Common/components/Input/Input";

  const AddCollectionTemplate = ({title,
                                 errorTitle,
                                 description,
                                 handleSubmit}) => {

  return (
    <div className='Add-collection'>

      <div className='form'>
        <form>
          <section className='inputs-text'>
              <div className='wrapper-text-field'>
                <Input error={errorTitle} binding={title} label='Добавьте название' requiredTest={true}/>
              </div>
              <div className='wrapper-text-field'>
                <Input multiline={true} rows={4} binding={description} label='Добавьте описание' requiredTest={false}/>
              </div>
            </section>
          <section className='input-img'>
            <DragAndDrop/>
          </section>

          <section className='button'>
            <Button
              variant="contained"
              color="primary"
              endIcon={<Icon>send</Icon>}
              size="large"
              onClick={() => handleSubmit()}>
              ОТПРАВИТЬ
            </Button>
          </section>
        </form>
      </div>
    </div>
  );
};


export default AddCollectionTemplate;
