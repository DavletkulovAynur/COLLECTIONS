import React, {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {addBookmarkAction, addBookmarkRemoveEventShowMessage, bookmarkDeleteAction} from '../../../Store/actions/action'

export function Bookmark({id}) {
  const {bookmark} = useSelector((state) => state.authReducer)
  const {addBookmark} = useSelector((state) => state.appReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if(addBookmark) {
      dispatch(addBookmarkRemoveEventShowMessage())
    }
  }, [addBookmark])

  const saveMyCollection = async (e) => {
    const bookmarkInfo = {
      bookmarkID: e.target.id,
      allBookmarkArray: bookmark
    }

    try {
      if(bookmark.includes(e.target.id)) {
        dispatch(bookmarkDeleteAction(bookmarkInfo))
      } else {
        dispatch(addBookmarkAction(bookmarkInfo))
      }
    } catch (e) {
      console.log('ERROR', e)
    }

  }

  return (
      <div
        id={id}
        onClick={saveMyCollection}
        className={`Button Button-root Button_red Bookmark ${bookmark.includes(id) ? 'info-bookmark-active' : ''}`}>
        сохранить
      </div>
  )
}
