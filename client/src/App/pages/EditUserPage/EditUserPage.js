import React from 'react';
import EditingProfile from '../../../Common/components/EditingProfile/EditingProfile'
import './EditUserPage.scss'
import {useDispatch} from "react-redux";
import {editAvatarAction, editUserAction} from "../../../Store/actions/action";
import EditingAvatar from "../../../Common/components/EditingAvatar/EditingAvatar";

const EditUserPage = () => {
  const dispatch = useDispatch()


  const sendAvatar = (formData) => {
    dispatch(editAvatarAction(formData))
  }

  const sendNewInfoProfile = (userInformation) => {
    dispatch(editUserAction(userInformation))
  }

  return (
    <div className='User-edit User-edit-root'>
      <h1>Редактировать профиль</h1>
      <EditingAvatar sendAvatar={sendAvatar}/>
      <EditingProfile sendNewInfoProfile={sendNewInfoProfile}/>
    </div>
  )
}

export default EditUserPage