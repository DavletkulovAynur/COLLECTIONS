import React, {useRef} from "react";
import {useInput} from "../../../../Common/utils/hooks";

export function CommentForm({handleSubmit}) {
  const commentValue = useInput('')
  const submitForm = (e) => {
    handleSubmit(commentValue.value)
    commentValue.clear()
    e.preventDefault()
  }
  return (
    <form className='form' onSubmit={submitForm}>
      <textarea className="form-control comment-input" placeholder="оставить отзыв"  {...commentValue.bind}/>
      <input className='button' type='submit' value='ОТПРАВИТЬ'/>
    </form>
  )
}
