import React, {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {addBookmarkAction, addBookmarkRemoveEventShowMessage, bookmarkDeleteAction} from '../../../Store/actions/action'

import './Bookmark.scss'

export function Bookmark({id}) {
  const {bookmark} = useSelector((state) => state.authReducer)
  const {addBookmark} = useSelector((state) => state.appReducer)
  const dispatch = useDispatch()


  // не понятно для чего
  // useEffect(() => {
  //   if(addBookmark) {
  //     dispatch(addBookmarkRemoveEventShowMessage())
  //   }
  // }, [addBookmark])

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
      console.log('super')
      dispatch(bookmarkDeleteAction(bookmarkInfo))
    } else {
      dispatch(addBookmarkAction(bookmarkInfo))
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
