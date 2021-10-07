import React from 'react'
import {DragAndDrop} from '../../../Common/components/DragAndDrop/DragAndDrop'
import StylePin from './templates/StylePin'
import {AddCollectionInputs} from './templates/AddCollectionInputs'
import {AddCollectionButton} from "./templates/AddCollectionButton";

const AddCollectionTemplate = ({ description, title,
                                 handleSubmit,
                                 loadImg,
                                 load,
                                 deleteImg,
                                 inputErrors,
                                 changeStyleSelect}) => {



  return (
  <div className='Add-collection Add-collection-root'>
      <h1 className='Add-collection__title'>Создание пина</h1>
      <form className='Add-collection__form'>
        <section className='Add-collection__drag-drop-box'>
          <DragAndDrop loadImg={loadImg} deleteImg={deleteImg}/>
        </section>
        <section className='Add-collection__inputs'>
          <div>
            <AddCollectionInputs inputErrors={inputErrors} description={description} title={title}/>
            <StylePin changeStyleSelect={changeStyleSelect}/>
          </div>
         <AddCollectionButton load={load} handleSubmit={handleSubmit}/>
        </section>
      </form>
  </div>
);
};


export default AddCollectionTemplate;
