import React, {useState} from 'react'
import {useInput} from '../../utils/hooks/input.hook'
import './InitCommentForm.scss'
import {InitCommentFormPreview} from './templates/InitCommentFormPreview'
import {InitCommentFormBox} from './templates/InitCommentFormBox'
import {useSelector} from 'react-redux'


const InitCommentForm = ({sendComment}) => {
  const {commentLoading} = useSelector(state => state.collectionViewReducer)
  const [formOpen, setFormOpen] = useState(false)
  const commentValue = useInput('')
  const commentTitle = useInput('')
  const [commentValueError, setCommentValueError] = useState(false)
  const [commentTitleError, setCommentTitleError] = useState(false)


  const submitForm = (event) => {
    event.preventDefault()
    const comment = {
      title: commentTitle.value,
      description: commentValue.value,
    }
    // TODO пока так
    const test = checkForm()
    if(!test) {
      return
    }

    sendComment(comment)
    // TODO clear в другую функцию
    commentValue.clear()
    commentTitle.clear()

  }

  const formShow = () => {
    setFormOpen(true)
  }

  const formClose = () => {
    setFormOpen(false)
  }

  // TODO подумать над реализацией
  function checkForm() {
    !commentTitle.value ? setCommentTitleError(true) : setCommentTitleError(false)
    !commentValue.value ? setCommentValueError(true) : setCommentValueError(false)
    if(!commentValue.value || !commentTitle.value) {
      return false
    }
    return true
  }

  return (
    <div className='Comment-create-form-box'>
      {
        !formOpen
        ? <InitCommentFormPreview formShow={formShow}/>
        : <InitCommentFormBox
            commentLoading={commentLoading}
            commentTitle={commentTitle}
            commentValue={commentValue}
            commentValueError={commentValueError}
            commentTitleError={commentTitleError}
            formClose={formClose}
            submitForm={submitForm}/>
      }
    </div>
  )
}

export default InitCommentForm