
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export function BookmarkMobile({id, saveInMyCollection, bookmark}) {
    return (
        <section className='Bookmark__mobile'>
           <div data-bookmark   id={id} 
                                onClick={saveInMyCollection} 
                                className={`Bookmark__mobile-button ${bookmark.includes(id) ? 'Bookmark__mobile-button_active' : ''}`}>
                <FontAwesomeIcon icon='bookmark' color='#141414'/>
           </div>
        </section>
    )
}

