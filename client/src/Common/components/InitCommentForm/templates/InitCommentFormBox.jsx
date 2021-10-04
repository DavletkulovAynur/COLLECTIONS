import Input from "../../Input/Input";
import React from "react";

export function InitCommentFormBox({commentTitle,
                                     commentValue,
                                     formClose,
                                      loading,
                                     submitForm}) {
  return (
    <form className='Comment-create-form-box__form Comment-create-form'>
      <div>
        <Input binding={commentTitle} label='title' placeholder='Заголовок'/>
      </div>
      <div>
        <Input binding={commentValue} label='placeholder' rows='4' multiline='true'/>
      </div>
      <div className='Comment-create-form__button-box'>
        <button className='Button Button-root' onClick={() => formClose()}>
          ОТМЕНА
        </button>
        <button className='Button Button-root' onClick={(event) => submitForm(event)}>
          ОТПРАВИТЬ
        </button>
      </div>
      {/*{loading ? <Loading/> : null }*/}
    </form>
  )
}