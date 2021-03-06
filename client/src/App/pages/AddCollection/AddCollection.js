import React, {useContext, useRef, useState} from "react";



import './AddCollection.scss'

import AddCollectionTemplate from "./AddCollectionTemplate";
import {useInput} from '../../../Common/utils/hooks/input.hook'
import {useDispatch, useSelector} from 'react-redux'
import {addCollectionAction} from '../../../Redux/actions/action';

function AddCollection(props) {
  const {userName} = useSelector((state) => state.authReducer)
  const formData = new FormData()
  const dispatch = useDispatch()
  const title = useInput('')
  const publisher = useInput('')
  const description = useInput('')
  const [files, setFiles] = useState()


  const handleSubmit = (e) => {
    const test = [...files]
    test.forEach((file) => {
      formData.append('file', file)
    })
    formData.append('title', title.value)
    formData.append('publisher', title.value)
    formData.append('description', title.value)
    formData.append('author', userName)

   // testFetch()
    dispatch(addCollectionAction(formData))

    inputClear([title, publisher, description])

  }

  const testFetch = async () => {
    const response = await fetch('http://localhost:5000/collection/add', {
      method: 'post',
      body: formData,
      headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
    })
  }

  const saveImages = (data) => {
    setFiles(data)
  }

  function inputClear(inputs) {
    inputs.forEach((item) => {
      item.clear()
    })
  }


  return (
    <AddCollectionTemplate
      title={title}
      publisher={publisher}
      description={description}
      saveImages={saveImages}
      handleSubmit={handleSubmit}
    />
  )
}


export default AddCollection
