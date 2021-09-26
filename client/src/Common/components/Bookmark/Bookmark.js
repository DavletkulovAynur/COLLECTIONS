import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {addBookmarkAction, bookmarkDeleteAction} from '../../../Store/actions/action'

import './Bookmark.scss'

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
      console.log('1')
    } else {
      dispatch(addBookmarkAction(bookmarkInfo))
      console.log('2')
    }
  }

  return (
    <div className='Bookmark Bookmark-root'>
      <div className='Bookmark__button-wrapper'>
        <div
          id={id}
          onClick={saveInMyCollection}
          className={`Button Button-root Button_bookmark ${bookmark.includes(id) ? 'Button_bookmark-save' : ''}`}>
          сохранить
        </div>
      </div>
    </div>
  )
}
