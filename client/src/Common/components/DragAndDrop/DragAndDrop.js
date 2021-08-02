import React, {useEffect, useState} from 'react';
import './DragAndDrop.scss'
import DragAndDropTemplate from "./DragAndDrop.template";
import {useDispatch, useSelector} from "react-redux";
import {loadImgDragAndDrop} from "../../../Redux/actions/action";

export function DragAndDrop() {
  let reader = new FileReader()
  const dispatch = useDispatch()
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
      dispatch(loadImgDragAndDrop({mainImg}))
    }
  }

  const deleteFile = () => {
    dispatch(loadImgDragAndDrop({mainImg: null}))
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


