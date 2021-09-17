import React from "react";
import './AddCollection.scss'
import AddCollectionTemplate from './AddCollectionTemplate'
import {useInput} from '../../../Common/utils/hooks/input.hook'
import {useDispatch, useSelector} from 'react-redux'
import {addCollectionAction, dispatchCollection} from '../../../Store/actions/action'
import {inputClear} from "../../../Common/utils/inputClear";

function AddCollection(props) {
  const {errorTitle, errorFiles, mainImg} = useSelector((state) => state.addCollectionReducer)
  const {userName} = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()
  const formData = new FormData()

  const title = useInput('')
  const description = useInput('')

  const handleSubmit = (e) => {
    if(!stateForm()) {
      return
    }

    formData.append('file', mainImg)
    formData.append('title', title.value)
    formData.append('description', title.value)
    formData.append('author', userName)
    dispatch(addCollectionAction(formData))
    inputClear([title, description])

  }

  const stateForm = () => {
    let error = true
    let files = false
    let value = false

    if(!mainImg) {
      files = true
      error = false
    }

    if(title.value === '') {
      value = true
      error = false
    }

    dispatch(dispatchCollection({errorTitle: value, errorFiles: files}))
    return error
  }

// test
  return (
    <AddCollectionTemplate
      title={title}
      errorTitle={errorTitle}
      errorFiles={errorFiles}
      description={description}
      handleSubmit={handleSubmit}
    />
  )
}


export default AddCollection
