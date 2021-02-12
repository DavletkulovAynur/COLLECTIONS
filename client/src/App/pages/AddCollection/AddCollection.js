import React, {useContext, useRef, useState} from "react";


import {useInput} from 'Common/utils/hooks/input.hook'
import {AuthContext} from "App/context/AuthContext";
import {useHttp} from "Common/utils/hooks/http.hook";
import './AddCollection.scss'
import {Select} from "Common/components/Select/Select";
import AddCollectionTemplate from "./AddCollectionTemplate";

function AddCollection(props) {
  const nameCollection = useInput()
  const {loading, error, request, clearError} = useHttp()
  const testSelect = useInput('')
  const title = useInput('')
  const img = useInput('')
  const publisher = useInput('')
  const description = useInput('')
  const {userName, userId} = useContext(AuthContext)

  const fetchEvent = async (collection = []) => {
    console.log('fetchEvent')
    const data = await request('http://localhost:5000/collection/add', 'POST', collection)
    console.log(data)
    // if(data.status) {
    //   console.log('игра успешно добавлена')
    //   getArticle(dispatch)
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    const comments = []
    const collection = {
      nameCollection: testSelect.value,
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

  }

  function inputClear(inputs) {
    inputs.forEach((item) => {
      item.clear()
    })
  }

  function inputForm(placeholder, input) {
    return (
      <input className='com-input-styles' type='text' placeholder={placeholder} {...input.bind}/>
    )
  }

  return (
    <AddCollectionTemplate
      title={title}
      img={img}
      publisher={publisher}
      description={description}
      testSelect={testSelect}
      handleSubmit={handleSubmit}
    />
  )
}


export default AddCollection
