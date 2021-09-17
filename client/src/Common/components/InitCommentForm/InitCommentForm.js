import Input from "../Input/Input";
import React, {useState} from "react";
import {useInput} from "../../utils/hooks/input.hook";
import './InitCommentForm.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const InitCommentForm = ({sendComment}) => {
  const [formOpen, setFormOpen] = useState(false)
  const commentValue = useInput('')
  const commentTitle = useInput('')

  const submitForm = (event) => {
    sendComment(commentValue.value, commentTitle.value)
    commentValue.clear()
    commentTitle.clear()
    event.preventDefault()
  }

  const formShow = () => {
    setFormOpen(true)
  }

  const formClose = () => {
    setFormOpen(false)
  }

  return (
    <div className={`Comment-create-form-box Comment-create-form-box_bg-${formOpen ? 'white' : 'dark'}`}>
      {
        !formOpen
        ? <div onClick={formShow} className='Comment-create-form-box__header Comment-create-header'>
            <FontAwesomeIcon icon="plus" style={{ color: '#fff' }}/>
            <div className='Comment-create-form-box__header-title'>Напишите комментарий</div>
          </div>
        : null
      }

      {formOpen
        ? <form className='Comment-create-form-box__form Comment-create-form'>
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
        : null}

    </div>
  )
}

export default InitCommentForm