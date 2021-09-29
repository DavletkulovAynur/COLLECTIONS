import React, {useEffect, useState} from 'react'
import {DragAndDrop} from '../../../Common/components/DragAndDrop/DragAndDrop';
import Input from "../../../Common/components/Input/Input";
import {useInput} from "../../../Common/utils/hooks/input.hook";

const AddCollectionTemplate = ({handleSubmit, loadImg, load, deleteImg, inputErrors}) => {
  const title = useInput('')
  const description = useInput('')
  const [titleInputError, setTitleInputError] = useState(false)


  useEffect(() => {
    errorDistributor(inputErrors)
  }, [inputErrors])

  // TODO вынести функцию
  const errorDistributor = (inputErrors) => {
    for(let value of Object.keys(inputErrors)) {
      if(value == 'titleError') {
        setTitleInputError(true)
      }
    }
  }

return (
  <div className='Add-collection Add-collection-root'>
      <h1 className='Add-collection__title'>Создание пина</h1>
      <form className='Add-collection__form'>
        <section className='Add-collection__drag-drop-box'>
          <DragAndDrop loadImg={loadImg} deleteImg={deleteImg}/>
        </section>
        <section className='Add-collection__inputs'>
          <div>
            <div className='Add-collection__input-name-collection'>
              <Input binding={title} error={titleInputError} placeholder='Добавьте название'/>
            </div>
            <Input binding={description} placeholder='Добавьте описание'/>
          </div>
          <div className='Add-collection__button'>
            <button disabled={load} onClick={(event) => handleSubmit(event, title, description)}
                    className='Button Button-root'>Сохранить
            </button>
          </div>
        </section>
      </form>
  </div>
);
};


export default AddCollectionTemplate;
