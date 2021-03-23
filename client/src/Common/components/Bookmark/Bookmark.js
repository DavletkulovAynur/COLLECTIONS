import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {addBookmarkAction, bookmarkDeleteAction} from '../../../Redux/actions/action'

export function Bookmark({id}) {
  const {bookmark} = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()

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
    <>
      <div
        id={id}
        onClick={saveMyCollection}
        className={`info-bookmark ${bookmark.includes(id) ? 'info-bookmark-active' : ''}`}>
      </div>
    </>

  )
}
