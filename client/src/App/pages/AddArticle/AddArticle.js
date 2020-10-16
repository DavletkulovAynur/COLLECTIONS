import React, {useContext, useRef, useState} from "react";


import {useInput} from 'Common/utils/hooks/input.hook'
import {AuthContext} from "App/context/AuthContext";
import {useHttp} from "Common/utils/hooks/http.hook";

function AddArticle(props) {
  const nameCollection = useInput()
  const {loading, error, request, clearError} = useHttp()
  const title = useInput('')
  const img = useInput('')
  const publisher = useInput('')
  const description = useInput('')
  const {userName, userId} = useContext(AuthContext)

  const fetchEvent = async (collection) => {
    const data = await request('http://localhost:5000/collection/add', 'POST', collection)
    // if(data.status) {
    //   console.log('игра успешно добавлена')
    //   getArticle(dispatch)
    // }
  }

  const handleSubmit = (e) => {
    const comments = []
    const collection = {
      nameCollection: 'book',
      title: title.value,
      img: img.value,
      publisher: publisher.value,
      description: description.value,
      author: userName,
      comments,
      userId
    }

    fetchEvent(collection)
    inputClear([title, img, publisher, description])
    e.preventDefault()
  }

  function inputClear(inputs) {
    inputs.forEach((item) => {
      item.clear()
    })
  }

  function inputForm(placeholder, input) {
    return (
      <input className='form-control' type='text' placeholder={placeholder} {...input.bind}/>
    )
  }

  return (
    <div className='Form'>
      <h1>ADD GAME</h1>
      <form onSubmit={handleSubmit}>
        {inputForm('title', title)}
        {inputForm('img', img)}
        {inputForm('publisher', publisher)}
        {inputForm('description', description)}
        <input type="submit" className="btn btn-primary" value="SEND"/>
      </form>
    </div>
  )
}


export default AddArticle
