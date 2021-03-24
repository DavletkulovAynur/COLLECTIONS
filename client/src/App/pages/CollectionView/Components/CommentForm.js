import React, {useContext, useRef} from 'react'
import {useInput} from 'Common/utils/hooks/input.hook'
import './styles/CommentsForm.scss'
import {Loading} from "Common/components/Loading/Loading";
import {useSelector} from "react-redux";

export function CommentForm({handleSubmit}) {
    const {loading} = useSelector((state) => state.collectionViewReducer)
  const commentValue = useInput('')
  const commentTitle = useInput('')

  const submitForm = (e) => {
    handleSubmit(commentValue.value, commentTitle.value)
    commentValue.clear()
    commentTitle.clear()
    e.preventDefault()
  }

  return (
    <div className='Comment-form'>
      <div className='Comment-form__header'>
        <span className='plus'></span>
        <div className='title'>write a comment...</div>
      </div>
      <form className='Comment-form__form'  onSubmit={submitForm}>
        <input className='form__title com-input-styles' {...commentTitle.bind} placeholder='title'></input>
        <textarea className="form__message com-input-styles" placeholder="description"  {...commentValue.bind}/>
        <input className='form__button' type='submit' value='ОТПРАВИТЬ'/>
        {loading ? <Loading/> : null }
      </form>
    </div>
  )
}
