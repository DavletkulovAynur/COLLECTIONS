import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {addBookmarkAction, bookmarkDeleteAction} from '../../../Store/actions/action'

import './Bookmark.scss'
import { BookmarkDesktop } from './templates/BookmarkDesktop.templates'

export function Bookmark({id}) {
  const {bookmark} = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()

  const saveInMyCollection = async (event) => {
    event.preventDefault()
    const bookmarkInfo = {
      bookmarkID: event.target.id,
      allBookmarkArray: bookmark
    }

    try {
      sendIdBookmark(bookmarkInfo)
    } catch (e) {
      console.log('ERROR', e)
    }
  }

  function sendIdBookmark(bookmarkInfo) {
    if(bookmark.includes(bookmarkInfo.bookmarkID)) {
      dispatch(bookmarkDeleteAction(bookmarkInfo))
    } else {
      dispatch(addBookmarkAction(bookmarkInfo))
    }
  }

  return (
    <div className='Bookmark Bookmark-root'>
      <BookmarkDesktop id={id} saveInMyCollection={saveInMyCollection} bookmark={bookmark}/>
      <section className='Bokkmark__mobile'>
        <h1>mobile</h1>
      </section>
    </div>
  )
}
