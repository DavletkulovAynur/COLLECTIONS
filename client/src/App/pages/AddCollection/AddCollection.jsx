import React, {useState} from "react";
import './AddCollection.scss'
import AddCollectionTemplate from './AddCollectionTemplate'

import {useDispatch, useSelector} from 'react-redux'
import {
  sendCollectionImgErrorAction,
  sendCollectionPreviewImg
} from "../../../Store/reducers/components/addCollectionReducer";
import {addCollectionAction} from "../../../Store/actions/action";
import {validationInputs} from "../../../Common/utils/checkForm";


function AddCollection() {
  const {userName} = useSelector((state) => state.authReducer)
  const {load} = useSelector((state) => state.addCollectionReducer)
  const [fileImg, setFileImg] = useState(null)
  const [inputErrors, SetInputErrors] = useState({})
  const dispatch = useDispatch()
  const formData = new FormData()
  const [stylePin, setStylePin]= useState('middle')

  const handleSubmit = (event, title, description) => {
    // TODO разбить функцию
    event.preventDefault()
    const thereAreMistakesInInputs = validationInputs({title: title.value})

    SetInputErrors(thereAreMistakesInInputs)
    if(!fileImg) {
      dispatch(sendCollectionImgErrorAction(true))
      return
    }
    if(Object.keys(thereAreMistakesInInputs).length !== 0) {
      return
    }

    // принимает объект

    formData.append('file', fileImg)
    formData.append('title', title.value)
    formData.append('description', description.value)
    formData.append('stylePin', stylePin)

    // TODO Можно автора не отправлять
    formData.append('author', userName)
    dispatch(addCollectionAction(formData))

  }

  const deleteImg = () => {
    dispatch(sendCollectionImgErrorAction(false))
    dispatch(sendCollectionPreviewImg(null))
    setFileImg(null)
  }

  const loadImg = (file, reader) => {
    dispatch(sendCollectionPreviewImg(reader))
    dispatch(sendCollectionImgErrorAction(false))
    setFileImg(file)
  }

  function changeStyleSelect(type) {
    setStylePin(type)
  }

  return (
    <AddCollectionTemplate
      changeStyleSelect={changeStyleSelect}
      load={load}
      handleSubmit={handleSubmit}
      loadImg={loadImg}
      deleteImg={deleteImg}
      inputErrors={inputErrors}
    />
  )
}


export default AddCollection