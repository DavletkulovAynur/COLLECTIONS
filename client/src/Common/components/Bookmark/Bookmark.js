import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from "Common/utils/hooks/http.hook";
import {AuthContext} from "App/context/AuthContext";
import {useDispatch, useSelector} from "react-redux";

// Оптимизировать работу
export function Bookmark({id}) {
  // const auth = useContext(AuthContext)
  const {error, request, clearError} = useHttp()
  const [bookmarkState, setBookmarkState] = useState([])
  const users = useSelector(state => state.usersReducer)

  useEffect(() => {
    // const user = users.filter((item) => item._id === auth.userId)
    // user.map((item) => {
    //   setBookmarkState([...item.bookmark])
    // })
  }, [users])

  //  e.persist(); ??????????
  const saveMyCollection = async (e) => {
    e.persist();
    const bookmark = {
      bookmarkID: e.target.id,
      // id: auth.userId
    }

    try {
      if(bookmarkState.includes(e.target.id)) {
        const data = await request('http://localhost:5000/users/delete-bookmark', 'PUT', bookmark)
        const newArr = bookmarkState.filter((item) => {
          return item != e.target.id
        })
        setBookmarkState(newArr)
      } else {
        const data = await request('http://localhost:5000/users/save-bookmark', 'PUT', bookmark)
        const newElement = e.target.id
        setBookmarkState([...bookmarkState,  newElement])
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
        className={`info-bookmark ${bookmarkState.includes(id) ? 'info-bookmark-active' : ''}`}>
      </div>
    </>

  )
}
