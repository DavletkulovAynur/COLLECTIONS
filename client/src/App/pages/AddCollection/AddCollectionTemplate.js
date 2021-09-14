import React from 'react'
import {DragAndDrop} from '../../../Common/components/DragAndDrop/DragAndDrop';
import Input from "../../../Common/components/Input/Input";

  const AddCollectionTemplate = ({title,
                                 errorTitle,
                                 description,
                                 handleSubmit}) => {

  return (
    <div className='Add-collection'>
      <form className='Add-collection_form'>
          <div className='Add-collection_form-inputs'>
            <section className='Add-collection_drag-drop-box'>
              <DragAndDrop/>
            </section>
            <section className='Add-collection_inputs entrance'>
              <div className='entrance_title'>
                <Input binding={title} placeholder='Добавьте название'/>
              </div>
              <Input binding={description} placeholder='Добавьте описание'/>

              <button className='Button Button-root Add-collection_button'>Сохранить</button>
            </section>
          </div>

        </form>
    </div>
  );
};


export default AddCollectionTemplate;
