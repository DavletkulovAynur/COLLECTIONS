import React, {useRef, useState} from "react";

import {useInput} from "Common/utils/hooks";
import Fetcher from "Common/utils/fetch";
import {getArticle} from "Common/utils/templates";
import {useDispatch} from "react-redux";

function AddArticle(props) {
  const dispatch = useDispatch()
  const inputName = useInput('')
  const inputImg = useInput('')
  const inputPublisher = useInput('')
  const inputDescription = useInput('')

  const fetchEvent = async (game) => {
    const data = await Fetcher('http://localhost:5000/game/add', 'POST', game)
    if(data.status) {
      console.log('игра успешно добавлена')
      getArticle(dispatch)
    }
  }

  const handleSubmit = (e) => {
    const comments = []
    const games = {
      name: inputName.value,
      img: inputImg.value,
      publisher: inputPublisher.value,
      description: inputDescription.value,
      comments
    }
    fetchEvent(games)
    inputClear([inputName, inputImg, inputPublisher, inputDescription])
    e.preventDefault()
  }

  function inputClear(inputs) {
    inputs.forEach((item) => {
      item.clear()
    })
  }

  return (
    <div className='Form'>
      <h1>ADD GAME</h1>
      <form onSubmit={handleSubmit}>
        <input className='form-control' type='text' name='name' placeholder='title' {...inputName.bind}/>
        <input className='form-control' type='text' name='img' placeholder='img' {...inputImg.bind}/>
        <input className='form-control' type='text' name='publisher' placeholder='publisher' {...inputPublisher.bind}/>
        <textarea className='form-control' type='' name='description' placeholder='description' {...inputDescription.bind}/>
        <input type="submit" className="btn btn-primary" value="SEND"/>
      </form>
    </div>
  )
}


export default AddArticle
