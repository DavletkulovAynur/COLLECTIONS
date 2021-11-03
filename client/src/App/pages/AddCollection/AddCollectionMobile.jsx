
import React, {useState} from 'react'
import StylePin from './templates/StylePin'
import { DragAndDrop } from 'Common/components/DragAndDrop/DragAndDrop'

import './AddCollectionMobile.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AddCollectionInputs } from './templates/AddCollectionInputs'
import { AddCollectionButton } from './templates/AddCollectionButton'


export function AddCollectionMobile({   fileImg, 
                                        loadImg, 
                                        deleteImg, 
                                        changeStyleSelect,
                                        writeDownSelectValue,
                                        inputErrors,
                                        description,
                                        title,
                                        nameCollection,
                                        load,
                                        handleSubmit,

                                    }) {
    const [textInputsShow, setTextInputsShow] = useState(false)

    const changeAddCollectionInputs = (booleanState) => {
        setTextInputsShow(booleanState)
    }

    const imageTemplate = () => {
        return (
            <>
                <DragAndDrop loadImg={loadImg} deleteImg={deleteImg}/>
                <StylePin changeStyleSelect={changeStyleSelect}/>
            </>
        )
    }

    const inputTemplate = () => {
        return (
            <>
                <AddCollectionInputs    writeDownSelectValue={writeDownSelectValue} 
                                        inputErrors={inputErrors} 
                                        description={description} 
                                        title={title} 
                                        nameCollection={nameCollection}/>
                <div className='Add-collection__mobile-button-send'>
                    <AddCollectionButton load={load} handleSubmit={handleSubmit}/>
                </div>
            </>
        )
    }

    const headerTemplate = () => {
        return (
            <div className='Add-collection__mobile-header'>
                <h1 className='Add-collection__title-mobile'>Создание коллекции</h1>
                    {textInputsShow
                        ?   <button onClick={() => changeAddCollectionInputs(false)} className='Add-collection__mobile-next-button'>
                                <FontAwesomeIcon icon='chevron-left' color='#000'/>
                                <span className="Add-collection__mobile-back-button-text">назад</span>
                            </button>
                        :   <button disabled={!fileImg} onClick={() => changeAddCollectionInputs(true)} className='Add-collection__mobile-next-button'>
                                <span className="Add-collection__mobile-next-button-text">далее</span>
                                <FontAwesomeIcon icon='chevron-right' color='#000'/>
                            </button>
                    }
                </div>
        )
    }


    return (
        <div className='Add-collection__mobile'>
            {headerTemplate()}
            {textInputsShow
                ?   <section>
                        {inputTemplate()}
                    </section>

                :   <section>
                        {imageTemplate()}
                    </section>
            }
        </div>
    )
}
