import { DragAndDrop } from 'Common/components/DragAndDrop/DragAndDrop'
import React from 'react'

export function AddCollectionMobile({loadImg, deleteImg}) {
    return (
        <div>
            <DragAndDrop loadImg={loadImg} deleteImg={deleteImg}/>

            <h1>ПРОСТОЙ ТЕКСТ</h1>
        </div>
    )
}
