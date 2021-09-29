import React, {useState} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Loading} from "../Loading/Loading";

const DragAndDropTemplate = ({errorFiles, previewImg, deleteFile, initialFile, fileUploadMoment}) => {
  const [drag, setDrag] = useState(false)

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

  const previewTemplate = () => {
    return (
      <section className='Drag-Drop__preview'>
        <img src={previewImg} className='Drag-Drop__preview-img'/>
        <div onClick={deleteFile} className='Drag-Drop__preview-delete-icon'>
          <FontAwesomeIcon icon='trash-alt' color='#000'/>
        </div>
      </section>
    )
  }

  const beforePreviewTemplate = () => {
    return (
      <div className='Drag-Drop__before-loading-img-block'>
        { fileUploadMoment
          ? <div className='Drag-Drop__moment-loading-block'>
              <Loading/>
            </div>
          : <div className={`Drag-Drop__file 
                    ${errorFiles && 'Drag-Drop__file_error'}
                    ${drag && 'Drag-Drop__file_active'}`}>

            <section className="Drag-Drop__cloud">
              <FontAwesomeIcon icon='arrow-alt-circle-up' color='#000'/>
              <span className="Drag-Drop__cloud-text">
                        Кликните или перетащите, чтобы загрузить фотографию
                    </span>
            </section>


            <input onChange={(e) => loadFile(e)} type="file" id="fileElem" multiple accept="image/*"/>
            <label onDragStart={(e) => dragStartHandler(e)}
                   onDragLeave={(e) => dragLeaveHandler(e)}
                   onDragOver={(e) => dragStartHandler(e)}
                   onDrop={(e) => dropHandler(e)}
                   className='Drag-Drop__label'
                   htmlFor="fileElem">

            </label>
          </div>
        }
      </div>
    )
  }

    return (
        <div className='Drag-Drop Drag-Drop-root'>
          { previewImg
            ? previewTemplate()
            : beforePreviewTemplate()
          }
        </div>
    );
};

export default DragAndDropTemplate;