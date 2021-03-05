import React, {useState} from 'react';
import './DragAndDrop.scss'

export function DragAndDrop({saveImages}) {
  const [drag, setDrag] = useState(true)

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
    console.log(files[0])
  }

  function loadFile(e) {
    const files = e.target.files
    saveImages(files)
  }
  return (
    <div id="drop-area-js" className="Drop-and-drop-file">
      <div className="cloud">
        <div className="icon"></div>
        <i className="text">Кликните или перетащите, чтобы загрузить фотографии</i>
      </div>
      <input onChange={(e) => loadFile(e)} className="file-elem-input" type="file" id="fileElem" multiple accept="image/*"/>
      <label onDragStart={(e) => dragStartHandler(e)}
             onDragLeave={(e) => dragLeaveHandler(e)}
             onDragOver={(e) => dragStartHandler(e)}
             onDrop={(e) => dropHandler(e)}
             className="button"
             htmlFor="fileElem">

      </label>
    </div>
  )
}


