import Input from "../../Input/Input";
import React from "react";
import {ButtonLoading} from "../../ButtonLoading/ButtonLoading";

export function InitCommentFormBox({commentTitle,
                                     commentValue,
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
          <Input binding={commentTitle} label='title' placeholder='Заголовок'/>
        </div>
        <div className='Comment-create-form__input'>
          <Input binding={commentValue} label='placeholder' rows='4' multiline='true'/>
        </div>
      </section>
    )
  }

  function actionButtons() {
    return (
      <section className='Comment-create-form__buttons'>
        <button disabled={commentLoading} className='Comment-create-form__button Button Button-root' onClick={() => formClose()}>
          ОТМЕНА
        </button>
        <button disabled={commentLoading} className='Comment-create-form__button Button Button-root' onClick={(event) => submitForm(event)}>
          {!commentLoading ? 'ОТПРАВИТЬ' : <ButtonLoading/>}
        </button>
      </section>
    )
  }
}