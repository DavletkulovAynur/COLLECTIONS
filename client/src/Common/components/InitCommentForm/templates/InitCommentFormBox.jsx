import Input from "../../Input/Input";
import React from "react";
import {ButtonLoading} from "../../ButtonLoading/ButtonLoading";

export function InitCommentFormBox({commentTitle,
                                     commentValue,
                                     commentTitleError,
                                     commentValueError,
                                     formClose,
                                     commentLoading,
                                     submitForm}) {


  return (
    <form className='Comment-create-form-box__form Comment-create-form'>
      {inputs()}
      {actionButtons()}
    </form>
  )

  function inputs() {
    return (
      <section className='Comment-create-form__inputs'>
        <div className='Comment-create-form__input'>
          <Input error={commentTitleError} binding={commentTitle} label='title' placeholder='Заголовок'/>
        </div>
        <div className='Comment-create-form__input'>
          <Input error={commentValueError} binding={commentValue} label='placeholder' placeholder='Комментарий' rows='4' multiline='true'/>
        </div>
      </section>
    )
  }

  function actionButtons() {
    return (
      <section className='Comment-create-form__buttons'>
        <button disabled={commentLoading} className='Comment-create-form__button Button Button-root Button_undo-actions' onClick={() => formClose()}>
          ОТМЕНА
        </button>
        <button disabled={commentLoading} className='Comment-create-form__button Button Button-root' onClick={(event) => submitForm(event)}>
          {!commentLoading ? 'ОТПРАВИТЬ' : <ButtonLoading/>}
        </button>
      </section>
    )
  }
}