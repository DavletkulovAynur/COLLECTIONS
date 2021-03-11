import React from 'react';
import CloseIcon from "@material-ui/icons/Close";

const DragAndDropTemplate = ({errorFiles, drag, previewImg,
                             dragStartHandler, dragLeaveHandler, deleteFile, dropHandler, loadFile}) => {
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
    );
};

export default DragAndDropTemplate;