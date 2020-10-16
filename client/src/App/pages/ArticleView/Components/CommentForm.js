import React, {useContext, useRef} from 'react'
import {useInput} from 'Common/utils/hooks/input.hook'

import {AuthContext} from '../../../context/AuthContext'
import './styles/CommentsForm.scss'

export function CommentForm({handleSubmit}) {
  const auth = useContext(AuthContext)
  console.log(auth)
  const commentValue = useInput('')
  const submitForm = (e) => {
    handleSubmit(commentValue.value)
    commentValue.clear()
    e.preventDefault()
  }
  return (
    <div className='Comment-form'>
      {auth.isAuthenticated ? <h1>МЫ В СИСТЕМЕ</h1>: null}
      <div className='Comment-form__header'>
        <span className='plus'></span>
        <div className='title'>write a comment...</div>
      </div>
      <form className='Comment-form__form'  onSubmit={submitForm}>
        <input className='form__title com-input-styles' placeholder='title'></input>
        <textarea className="form__message com-input-styles" placeholder="description"  {...commentValue.bind}/>
        <input className='form__button' type='submit' value='ОТПРАВИТЬ'/>
      </form>
    </div>
  )
}
