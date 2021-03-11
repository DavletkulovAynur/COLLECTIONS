import React, {useEffect, useState} from 'react';
import './DragAndDrop.scss'
import DragAndDropTemplate from "./DragAndDrop.template";
import {useDispatch} from "react-redux";

export function DragAndDrop({saveImages, errorFiles}) {
  let reader = new FileReader()
  const [drag, setDrag] = useState(false)
  const [previewImg, setPreviewImg] = useState('')

  const [stateFiles, setStateFiles] = useState(errorFiles)
  console.log(errorFiles)
  useEffect(() => {
    console.log('errorFiles', errorFiles)
    setStateFiles(errorFiles)
  }, [errorFiles])

  function dragStartHandler(e) {
    e.preventDefault()
    setDrag(true)
  }

  function dragLeaveHandler(e) {
    e.preventDefault()
    setDrag(false)
  }

  function dropHandler(e) {
    e.preventDefault()
    let files = [...e.dataTransfer.files]
    initialFile(files)
  }

  function loadFile(e) {
    const files = e.target.files
    initialFile(files)
  }

  const initialFile = (files) => {
    const arrFiles = [...files]
    const mainImg = arrFiles[0]

    reader.readAsDataURL(mainImg)

    reader.onload = function () {
      setPreviewImg(reader.result)
      setStateFiles(false)
    }

    saveImages(files)
  }

  const deleteFile = () => {
    saveImages()
    setPreviewImg('')
  }

  return (
      <DragAndDropTemplate
        errorFiles={stateFiles}
        drag={drag}
        previewImg={previewImg}
        dragStartHandler={dragStartHandler}
        dragLeaveHandler={dragLeaveHandler}
        dropHandler={dropHandler}
        loadFile={loadFile}
        deleteFile={deleteFile}
      />
      )
}


