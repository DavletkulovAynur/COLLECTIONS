import React, {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {addBookmarkAction, addBookmarkRemoveEventShowMessage, bookmarkDeleteAction} from '../../../Redux/actions/action'
import {ShowMessage} from '../ShowMessage/ShowMessage'

export function Bookmark({id}) {
  const [stateMessage, setStateMessage] = useState(false)
  const {bookmark} = useSelector((state) => state.authReducer)
  const {addBookmark} = useSelector((state) => state.appReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if(addBookmark) {
      setStateMessage(true)
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
    <>
      <div
        id={id}
        onClick={saveMyCollection}
        className={`info-bookmark ${bookmark.includes(id) ? 'info-bookmark-active' : ''}`}>
      </div>
      <ShowMessage showMessage={stateMessage}/>
    </>

  )
}
