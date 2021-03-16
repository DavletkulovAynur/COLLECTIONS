import React, {useState} from 'react';

import {useSelector} from 'react-redux'
import './PopupChangeAvatar.scss'
import PopupChangeAvatarTemplate from './PopupChangeAvatarTemplate'




export default function PopupChangeAvatar() {
    let reader = new FileReader()
    const {avatar, userName} = useSelector((state) => state.authReducer)
    const [open, setOpen] = React.useState(false)
    const [fullWidth, setFullWidth] = React.useState(true)
    const [maxWidth, setMaxWidth] = React.useState('sm')
    const [previewImg, setPreviewImg] = useState('')
    const [loadAvatar, setLoadAvatar] = useState(null)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
        const formData = new FormData()
        formData.append('avatar', avatar)
        formData.append('file', loadAvatar)
        const response = await fetch('http://localhost:5000/users/load-avatar', {
            method: 'post',
            body: formData,
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        })

        console.log(response.status)

    }

    const deleteFile = () => {
        setPreviewImg('')
    }

    return (
       <PopupChangeAvatarTemplate fileUploadHandler={fileUploadHandler}
                                  handleClickOpen={handleClickOpen}
                                  handleClose={handleClose}
                                  deleteFile={deleteFile}
                                  sendAvatar={sendAvatar}
                                  open={open}
                                  fullWidth={fullWidth}
                                  maxWidth={maxWidth}
                                  previewImg={previewImg}/>
    );
}