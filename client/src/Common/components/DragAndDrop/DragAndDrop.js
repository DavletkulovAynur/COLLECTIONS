import React, {useState} from 'react';
import './DragAndDrop.scss'
import CloseIcon from '@material-ui/icons/Close';

export function DragAndDrop({saveImages, errorFiles}) {
  const [drag, setDrag] = useState(false)
  const [previewImg, setPreviewImg] = useState('')


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

    // saveImages(files)
    console.log(files)
  }

  function loadFile(e) {
    let reader = new FileReader()
    const files = e.target.files
    const arrFiles = [...files]
    const mainImg = arrFiles[0]

    reader.readAsDataURL(mainImg)

    reader.onload = function () {
      setPreviewImg(reader.result)
    }



    saveImages(files)
  }

  const deleteFile = () => {
    saveImages()
    setPreviewImg('')
  }

  return (
      <section className='Drag-and-Drop-wrapper'>
        <div id="drop-area-js" className={`Drop-and-drop-file 
                                      ${errorFiles ? 'Drag-and-drop-error' : ''}
                                      ${drag ? 'drag-drop-active' : ''}`}>
          <div className="cloud">
            <div className="icon"></div>
            <i className="text">
              {previewImg
                  ? 'Вы добавили фотографию, кликните или перетащите, чтобы изменить'
                  : 'Кликните или перетащите, чтобы загрузить фотографию'
              }

            </i>
          </div>
          <input onChange={(e) => loadFile(e)} className="file-elem-input" type="file" id="fileElem" multiple accept="image/*"/>
          <label  onDragStart={(e) => dragStartHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragStartHandler(e)}
                  onDrop={(e) => dropHandler(e)}
                  className={`button`}
                  htmlFor="fileElem">

          </label>
        </div>

        {previewImg
            ? <div className='preview-img-wrapper'>
              <img src={previewImg} className='preview-img'/>
              <CloseIcon className='delete-preview-img' onClick={deleteFile}/>
            </div>

            : ''}
      </section>

  )
}


