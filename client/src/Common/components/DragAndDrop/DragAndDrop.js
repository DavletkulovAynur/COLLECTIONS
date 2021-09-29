import React from 'react';
import './DragAndDrop.scss'
import DragAndDropTemplate from "./DragAndDrop.template";
import {useSelector} from "react-redux";


export function DragAndDrop({loadImg}) {
  let reader = new FileReader()
  const {errorFiles, previewImg} = useSelector((state) => state.addCollectionReducer)

  const initialFile = (files) => {
    const arrFiles = [...files]
    const mainImg = arrFiles[0]
    if(!mainImg) {
      return
    }

    reader.readAsDataURL(mainImg)

    reader.onload = function () {
      loadImg(mainImg, reader.result)
    }
  }

  // TODO
  const deleteFile = () => {
    loadImg(null)
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


