import React, {useEffect, useState} from 'react';
import './DragAndDrop.scss'
import DragAndDropTemplate from "./DragAndDrop.template";
import {useSelector} from "react-redux";


export function DragAndDrop({loadImg}) {
  let reader = new FileReader()
  const {errorFiles, sendCollectionStatus} = useSelector((state) => state.addCollectionReducer)
  const [previewImg, setPreviewImg] = useState('')

  useEffect(() => {
    deleteFile()
  }, [sendCollectionStatus])

  const initialFile = (files) => {
    const arrFiles = [...files]
    const mainImg = arrFiles[0]
    if(!mainImg) {
      return
    }

    reader.readAsDataURL(mainImg)

    reader.onload = function () {
      setPreviewImg(reader.result)
      loadImg(mainImg)
    }
  }

  const deleteFile = () => {
    setPreviewImg('')
  }

  return (
      <DragAndDropTemplate
        errorFiles={errorFiles}
        previewImg={previewImg}
        initialFile={initialFile}
        deleteFile={deleteFile}
      />
      )
}


