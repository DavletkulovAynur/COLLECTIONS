import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux'
import './PopupChangeAvatar.scss'
import PopupChangeAvatarTemplate from './PopupChangeAvatarTemplate'
import {editUserAction, openPopupChangeAvatar} from "../../../Redux/actions/action";
import {DefineAvatarUrl} from "../../utils/DefineAvatarUrl";
import {useInput} from "../../utils/hooks/input.hook";




export default function EditingProfile() {
    let reader = new FileReader()
    const {avatar, userName} = useSelector((state) => state.authReducer)
    const {statePopup} = useSelector((state) => state.personalPageReducer)
    const dispatch = useDispatch()

    const [fullWidth, setFullWidth] = React.useState(true)
    const [maxWidth, setMaxWidth] = React.useState('sm')
    const [previewImg, setPreviewImg] = useState('')
    const [loadAvatar, setLoadAvatar] = useState(null)
    const [showMessage, setShowMessage] = useState(false)
    const [loading, setLoading] = useState(false)

    const nameInput = useInput(userName)
    const aboutUserInput = useInput('')
    const placeInput = useInput('')

    const handleClose = () => {
        dispatch(openPopupChangeAvatar(false))
    };

    async  function fileUploadHandler(event) {
        const files = [...event.target.files]
        const arrFiles = [...files]
        const mainImg = arrFiles[0]
        setLoadAvatar(mainImg)

        reader.readAsDataURL(mainImg)

        reader.onload = function () {
            setPreviewImg(reader.result)

        }
    }

    const sendAvatar = async () => {
        setLoading(true)
        const formData = new FormData()
        formData.append('avatar', avatar)
        formData.append('file', loadAvatar)
        const response = await fetch('http://localhost:5000/users/load-avatar', {
            method: 'post',
            body: formData,
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        })

        if(response.ok) {
            setLoading(false)
            setPreviewImg('')
            setShowMessage(true)
        }

    }

    const deleteFile = () => {
        setPreviewImg('')

    }

    const avatarUrl = DefineAvatarUrl()

    function sendUserInformation() {
        dispatch(editUserAction({place: placeInput.value, name: nameInput.value, description: aboutUserInput.value}))
    }

    return (
       <PopupChangeAvatarTemplate fileUploadHandler={fileUploadHandler}
                                  handleClose={handleClose}
                                  deleteFile={deleteFile}
                                  sendAvatar={sendAvatar}
                                  loading={loading}
                                  avatarUrl={avatarUrl}
                                  showMessage={showMessage}
                                  open={statePopup}
                                  fullWidth={fullWidth}
                                  maxWidth={maxWidth}
                                  userName={userName}
                                  previewImg={previewImg}
                                  nameInput={nameInput}
                                  aboutUserInput={aboutUserInput}
                                  placeInput={placeInput}
                                  sendUserInformation={sendUserInformation}

       />
    );
}