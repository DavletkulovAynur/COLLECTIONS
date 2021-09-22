import React from 'react';
import EditingProfile from '../../../Common/components/EditingProfile/EditingProfile'
import './EditUserPage.scss'

const EditUserPage = () => {
  return (
    <div className='User-edit User-edit-root'>
      <h1>Редактировать профиль</h1>
      <EditingProfile/>
    </div>
  )
}

export default EditUserPage