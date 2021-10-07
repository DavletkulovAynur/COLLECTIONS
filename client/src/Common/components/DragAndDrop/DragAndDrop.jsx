import React, {useState} from 'react';
import './DragAndDrop.scss'
import DragAndDropTemplate from "./DragAndDrop.template";
import {useSelector} from "react-redux";


export function DragAndDrop({loadImg, deleteImg}) {
  let reader = new FileReader()
  const {errorFiles, previewImg} = useSelector((state) => state.addCollectionReducer)
  const [fileUploadMoment, setFileUploadMoment] = useState(false)

  const initialFile = (files) => {
    const arrFiles = [...files]
    const mainImg = arrFiles[0]
    if(!mainImg) {
      return
    }

    setFileUploadMoment(true)
    reader.readAsDataURL(mainImg)

    reader.onload = function () {
      setFileUploadMoment(false)
      loadImg(mainImg, reader.result)
    }
  }

  const deleteFile = () => {
    deleteImg(null)
  }

  return (
      <DragAndDropTemplate
        fileUploadMoment={fileUploadMoment}
        errorFiles={errorFiles}
        previewImg={previewImg}
        initialFile={initialFile}
        deleteFile={deleteFile}
      />
      )
}


