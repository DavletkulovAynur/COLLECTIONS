import React, {useState} from 'react';
import CloseIcon from "@material-ui/icons/Close";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DragAndDropTemplate = ({errorFiles, previewImg, deleteFile, initialFile}) => {
    return (
        <div className='Drag-Drop Drag-Drop_root'>
            <DropArea errorFiles={errorFiles} previewImg={previewImg} initialFile={initialFile}/>
            <PreviewMainImg previewImg={previewImg} deleteFile={deleteFile}/>
        </div>
    );
};

export default DragAndDropTemplate;

const DropArea = ({errorFiles, previewImg, initialFile}) => {
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

    return (
        <section id="drop-area-js"
                  className={`Drag-Drop_file 
                  ${errorFiles ? 'Drag-Drop__error' : ''}
                  ${drag ? 'Drag-Drop__active' : ''}`}>
            <div className="Drag-Drop_cloud cloud">
                <FontAwesomeIcon icon='arrow-alt-circle-up' color='#000'/>
                <i className="cloud_text">
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
                    className={`Drag-Drop_label`}
                    htmlFor="fileElem">

            </label>
        </section>
    )
}

const PreviewMainImg = ({previewImg, deleteFile}) => {
    return (
        <>
            {previewImg
                ?   <section className='add-preview-img-wrapper'>
                        <img src={previewImg} className='preview-img'/>
                        <CloseIcon className='delete-preview-img' onClick={deleteFile}/>
                    </section>

                : ''}
        </>

    )
}