import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux'
import './PopupChangeAvatar.scss'
import PopupChangeAvatarTemplate from './PopupChangeAvatarTemplate'
import {openPopupChangeAvatar} from "../../../Redux/actions/action";




export default function PopupChangeAvatar() {
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


        console.log(response)
        if(response.ok) {
            console.log('super')
            setLoading(false)
            setPreviewImg('')
            setShowMessage(true)
        }

    }

    const deleteFile = () => {
        setPreviewImg('')

    }

    return (
       <PopupChangeAvatarTemplate fileUploadHandler={fileUploadHandler}
                                  handleClose={handleClose}
                                  deleteFile={deleteFile}
                                  sendAvatar={sendAvatar}
                                  loading={loading}
                                  showMessage={showMessage}
                                  open={statePopup}
                                  fullWidth={fullWidth}
                                  maxWidth={maxWidth}
                                  previewImg={previewImg}/>
    );
}