import React, {useState} from 'react';
import CloseIcon from "@material-ui/icons/Close";

const DragAndDropTemplate = ({errorFiles, previewImg, deleteFile, initialFile}) => {
    return (
        <div className='Drag-and-Drop-wrapper'>
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
        <section id="drop-area-js" className={`Drop-and-drop-file 
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
        </section>
    )
}

const PreviewMainImg = ({previewImg, deleteFile}) => {
    return (
        <>
            {previewImg
                ?   <section className='preview-img-wrapper'>
                        <img src={previewImg} className='preview-img'/>
                        <CloseIcon className='delete-preview-img' onClick={deleteFile}/>
                    </section>

                : ''}
        </>

    )
}