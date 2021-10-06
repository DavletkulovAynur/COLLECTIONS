
import React, {useState} from "react";
import {useInput} from "../../utils/hooks/input.hook";
import './InitCommentForm.scss'
import {InitCommentFormPreview} from "./templates/InitCommentFormPreview";
import {InitCommentFormBox} from "./templates/InitCommentFormBox";
import {useSelector} from "react-redux";


const InitCommentForm = ({sendComment}) => {
  const {commentLoading} = useSelector(state => state.collectionViewReducer)
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
    <div className='Comment-create-form-box'>
      {
        !formOpen
        ? <InitCommentFormPreview formShow={formShow}/>
        : <InitCommentFormBox
            commentLoading={commentLoading}
            commentTitle={commentTitle}
            commentValue={commentValue}
            formClose={formClose}
            submitForm={submitForm}/>
      }
    </div>
  )
}

export default InitCommentForm