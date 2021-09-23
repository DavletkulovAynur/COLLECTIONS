import React, {useState} from "react";
import {useSelector} from "react-redux";
import EditingAvatarTemplate from "./EditingAvatarTemplate";
import './EditingAvatar.scss'
import {DefineAvatarUrl} from "../../utils/DefineAvatarUrl";

export default function EditingAvatar({sendAvatar}) {
  let reader = new FileReader()
  const {avatar} = useSelector((state) => state.authReducer)

  const [previewImg, setPreviewImg] = useState()
  const [openPopupPreview, setOpenPopupPreview] = useState(false)
  const [loadAvatar, setLoadAvatar] = useState(null)

  const fileUploadHandler = async (event) => {
    const files = [...event.target.files]
    const arrFiles = [...files]
    const mainImg = arrFiles[0]
    setLoadAvatar(mainImg)
    reader.readAsDataURL(mainImg)

    reader.onload = function () {
      setPreviewImg(reader.result)
      setOpenPopupPreview(true)
    }
  }

  const deleteFile = () => {
    setPreviewImg('')
    setOpenPopupPreview(false)
  }

  const avatarUrl = DefineAvatarUrl()

  const changeUserAvatar = async () => {
    const formData = new FormData()
    formData.append('avatar', avatar)
    formData.append('file', loadAvatar)
    // sendAvatar(formData)
    setPreviewImg('')
  }

  return (
    <EditingAvatarTemplate
      fileUploadHandler={fileUploadHandler}
      previewImg={previewImg}
      changeUserAvatar={changeUserAvatar}
      deleteFile={deleteFile}
      avatarUrl={avatarUrl}
      openPopupPreview={openPopupPreview}
    />
  )
}