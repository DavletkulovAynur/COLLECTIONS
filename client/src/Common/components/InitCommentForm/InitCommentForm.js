import Input from "../Input/Input";
import React, {useState} from "react";
import {useInput} from "../../utils/hooks/input.hook";
import './InitCommentForm.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const InitCommentForm = ({sendComment}) => {
  const [formOpen, setFormOpen] = useState(false)
  const commentValue = useInput('')
  const commentTitle = useInput('')

  const submitForm = (e) => {
    sendComment(commentValue.value, commentTitle.value)
    commentValue.clear()
    commentTitle.clear()
    e.preventDefault()
  }

  const formShow = () => {
    setFormOpen(true)
  }

  const formClose = () => {
    setFormOpen(false)
  }

  return (
    <div className='Comment-create-form-box'>
      <div onClick={formShow} className='Comment-create-form-box__header'>
        <FontAwesomeIcon icon="plus" style={{ color: '#fff' }}/>
        <div className='Comment-create-form-box__header-title'>Напишите комментарий</div>
      </div>
      {formOpen
        ? <form className='Comment-create-form-box__form Comment-create-form'>
          <div>
            <Input binding={commentTitle} label='title'/>
          </div>
          <div>
            <Input binding={commentValue} label='placeholder' rows='4' multiline='true'/>
          </div>
          <div className='Comment-create-form__button-box'>
            <button className='Button Button-root' onClick={() => formClose()}>
              ОТМЕНА
            </button>
            <button className='Button Button-root' onClick={() => submitForm()}>
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