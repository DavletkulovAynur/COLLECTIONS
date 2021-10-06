import React, {useState} from "react";
import {useSelector} from "react-redux";
import EditingAvatarTemplate from "./EditingAvatarTemplate";
import './EditingAvatar.scss'
import {DefineAvatarUrl} from "../../utils/DefineAvatarUrl";

export default function EditingAvatar({sendAvatar}) {
  let reader = new FileReader()
  const {owner} = useSelector((state) => state.authReducer)
  const {avatar} = owner

  const [previewImg, setPreviewImg] = useState(null)
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
    setPreviewImg(null)
    setOpenPopupPreview(false)
  }

  const avatarUrl = DefineAvatarUrl(avatar)

  const changeUserAvatar = async () => {
    const formData = new FormData()
    formData.append('avatar', avatar)
    formData.append('file', loadAvatar)
    // sendAvatar(formData)
    setPreviewImg(null)
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