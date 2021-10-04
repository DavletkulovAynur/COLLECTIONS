
import React, {useState} from "react";
import {useInput} from "../../utils/hooks/input.hook";
import './InitCommentForm.scss'
import {InitCommentFormPreview} from "./templates/InitCommentFormPreview";
import {InitCommentFormBox} from "./templates/InitCommentFormBox";


const InitCommentForm = ({sendComment, loading}) => {
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
        ? <InitCommentFormPreview formShow={formShow}/>
        : <InitCommentFormBox
            loading={loading}
            commentTitle={commentTitle}
            commentValue={commentValue}
            formClose={formClose}
            submitForm={submitForm}/>
      }
    </div>
  )
}

export default InitCommentForm