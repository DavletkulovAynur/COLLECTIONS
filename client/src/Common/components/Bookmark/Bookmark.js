import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from "Common/utils/hooks/http.hook";

import {useDispatch, useSelector} from "react-redux";

// Оптимизировать работу
export function Bookmark({id}) {
  const {userId, bookmark} = useSelector((state) => state.authReducer)
  const {request} = useHttp()


  //  e.persist(); ??????????
  const saveMyCollection = async (e) => {
    e.persist();
    const bookmark = {
      bookmarkID: e.target.id,
      id: userId
    }

    try {
      if(bookmark.includes(e.target.id)) {
        const data = await request('http://localhost:5000/users/delete-bookmark', 'PUT', bookmark)
        const newArr = bookmark.filter((item) => {
          return item != e.target.id
        })
        // setBookmarkState(newArr)
      } else {
        const data = await request('http://localhost:5000/users/save-bookmark', 'PUT', bookmark)
        const newElement = e.target.id
        // setBookmarkState([...bookmarkState,  newElement])
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
