import Input from "../../../../Common/components/Input/Input";
import React, {useEffect, useState} from "react";


export function AddCollectionInputs({inputErrors, title, description}) {
  const [titleInputError, setTitleInputError] = useState(false)

  useEffect(() => {
    errorDistributor(inputErrors)
  }, [inputErrors])

  // TODO вынести функцию
  const errorDistributor = (inputErrors) => {
    if (Object.keys(inputErrors).length == 0) {
      setTitleInputError(false)
    }
    for(let value of Object.keys(inputErrors)) {
      if(value === 'titleError') {
        setTitleInputError(true)
      }
    }
  }


  return (
    <>
      <div className='Add-collection__input-name-collection'>
        <Input binding={title} error={titleInputError} placeholder='Добавьте название'/>
      </div>
      <div>
        <Input binding={description} placeholder='Добавьте описание'/>
      </div>
    </>
  )
}