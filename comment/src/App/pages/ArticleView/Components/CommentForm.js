import React, {useRef} from 'react'
import {useInput} from '../../../../Common/utils/hooks'
import './styles/CommentsForm.scss'

export function CommentForm({handleSubmit}) {
  const commentValue = useInput('')
  const submitForm = (e) => {
    handleSubmit(commentValue.value)
    commentValue.clear()
    e.preventDefault()
  }
  return (
    <form className='form comment-wrapper' onSubmit={submitForm}>
      <div className='title'>write a comment...</div>
      <textarea className="textarea" placeholder=""  {...commentValue.bind}/>
      <input className='button' type='submit' value='ОТПРАВИТЬ'/>
    </form>
  )
}
