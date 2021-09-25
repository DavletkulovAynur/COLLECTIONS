import React from "react";
import './AddCollection.scss'
import AddCollectionTemplate from './AddCollectionTemplate'

import {useDispatch, useSelector} from 'react-redux'
import {addCollectionAction} from '../../../Store/actions/action'


function AddCollection() {
  const {userName} = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()
  const formData = new FormData()



  const handleSubmit = (event, title, description) => {
    // formData.append('file', mainImg)
    formData.append('title', title.value)
    formData.append('description', description.value)
    formData.append('author', userName)
    dispatch(addCollectionAction(formData))
  }

  const loadImg = (file) => {
    console.log('super', file)
  }

  return (
    <AddCollectionTemplate
      handleSubmit={handleSubmit}
      loadImg={loadImg}
    />
  )
}


export default AddCollection
