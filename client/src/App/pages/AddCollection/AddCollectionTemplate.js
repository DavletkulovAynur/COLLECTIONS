import React from 'react'
import {DragAndDrop} from '../../../Common/components/DragAndDrop/DragAndDrop';
import Input from "../../../Common/components/Input/Input";
import {useInput} from "../../../Common/utils/hooks/input.hook";

const AddCollectionTemplate = ({handleSubmit, loadImg}) => {

const title = useInput('')
const description = useInput('')

return (
  <div className='Add-collection'>
    <form className='Add-collection__form'>
      <section className='Add-collection__drag-drop-box'>
        <DragAndDrop loadImg={loadImg}/>
      </section>
      <section className='Add-collection__inputs'>
        <Input binding={title} placeholder='Добавьте название'/>
        <Input binding={description} placeholder='Добавьте описание'/>
        <button onClick={(event) => handleSubmit(event, title, description)}
                className='Button Button-root Add-collection__button'>Сохранить
        </button>
      </section>
    </form>
  </div>
);
};


export default AddCollectionTemplate;
