import React from "react";

export function BookmarkDesktop({id, saveInMyCollection, bookmark}) {
    return (
        <section className='Bookmark__desktop'>
            <div className='Bookmark__button-wrapper'>
                <div
                    id={id}
                    onClick={saveInMyCollection}
                    className={`Button Button-root Button_bookmark ${bookmark.includes(id) ? 'Button_undo-actions' : ''}`}>
                    сохранить
                </div>
            </div>
      </section>
    )
}