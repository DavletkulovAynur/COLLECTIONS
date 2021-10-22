import React from "react";

export function BookmarkDesktop({id, saveInMyCollection, bookmark}) {
    return (
        <section className='Bookmark__desktop'>
            <div className='Bookmark__button-wrapper'>
                <div
                    data-bookmark
                    id={id}
                    onClick={saveInMyCollection}
                    className={`Button Button-root ${bookmark.includes(id) ? 'Button_undo-actions' : ''}`}>
                    сохранить
                </div>
            </div>
      </section>
    )
}