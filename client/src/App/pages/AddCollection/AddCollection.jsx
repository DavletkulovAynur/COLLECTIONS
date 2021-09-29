import React, {useEffect, useState} from "react";
import './AddCollection.scss'
import AddCollectionTemplate from './AddCollectionTemplate'

import {useDispatch, useSelector} from 'react-redux'
import {
  sendCollectionImgErrorAction,
  sendCollectionImgErrorDeleteAction, sendCollectionPreviewImg
} from "../../../Store/reducers/components/addCollectionReducer";


function AddCollection() {
  const {userName} = useSelector((state) => state.authReducer)
  const {load, sendCollectionStatus} = useSelector((state) => state.addCollectionReducer)
  const [fileImg, setFileImg] = useState(null)
  const dispatch = useDispatch()
  const formData = new FormData()

  const handleSubmit = (event, title, description) => {
    event.preventDefault()
    if(!fileImg) {
      dispatch(sendCollectionImgErrorAction())
      return
    }
    formData.append('file', fileImg)
    formData.append('title', title.value)
    formData.append('description', description.value)

    // Можно автора не отправлять
    formData.append('author', userName)
    // dispatch(addCollectionAction(formData))

  }

  const loadImg = (file, reader) => {
    if(!file) {
      dispatch(sendCollectionImgErrorAction())
      dispatch(sendCollectionPreviewImg(null))
      setFileImg(null)
      return
    }
    dispatch(sendCollectionPreviewImg(reader))
    dispatch(sendCollectionImgErrorDeleteAction())
    setFileImg(file)
  }

  return (
    <AddCollectionTemplate
      load={load}
      handleSubmit={handleSubmit}
      loadImg={loadImg}
    />
  )
}


export default AddCollection
