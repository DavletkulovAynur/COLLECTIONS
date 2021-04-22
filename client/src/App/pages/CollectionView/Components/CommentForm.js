import React, {useState} from 'react'
import {useInput} from 'Common/utils/hooks/input.hook'
import './styles/CommentsForm.scss'
import {Loading} from "Common/components/Loading/Loading";
import {useSelector} from "react-redux";
import Input from "../../../../Common/components/Input/Input";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

export function CommentForm({handleSubmit}) {
  const [formOpen, setFormOpen] = useState(false)
  const {loading} = useSelector((state) => state.collectionViewReducer)
  const commentValue = useInput('')
  const commentTitle = useInput('')

  const submitForm = (e) => {
    handleSubmit(commentValue.value, commentTitle.value)
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
    <div className='Comment-form'>
      <div onClick={formShow} className='Comment-form__header'>
        <span className='plus'></span>
        <div className='title'>Напишите комментарий</div>
      </div>
      {formOpen
        ? <form className='Comment-form__form'>
            <div>
              <Input binding={commentTitle} label='title'/>
            </div>
            <div>
              <Input binding={commentValue} label='placeholder' rows='4' multiline='true'/>
            </div>
            <div className='button-wrapper'>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => formClose()}>
                ОТМЕНА
              </Button>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
                size="large"
                onClick={() => submitForm()}>
                ОТПРАВИТЬ
              </Button>
            </div>
            {/*{loading ? <Loading/> : null }*/}
          </form>
        : null}

    </div>
  )
}
