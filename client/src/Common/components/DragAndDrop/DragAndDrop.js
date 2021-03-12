import React, {useEffect, useState} from 'react';
import './DragAndDrop.scss'
import DragAndDropTemplate from "./DragAndDrop.template";
import {useDispatch, useSelector} from "react-redux";
import {loadImgDragAndDrop} from "../../../Redux/actions/action";

export function DragAndDrop({saveImages}) {
  let reader = new FileReader()
  const {errorFiles, sendCollectionStatus} = useSelector((state) => state.addCollectionReducer)
  const [drag, setDrag] = useState(false)
  const [previewImg, setPreviewImg] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    deleteFile()
  }, [sendCollectionStatus])

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


