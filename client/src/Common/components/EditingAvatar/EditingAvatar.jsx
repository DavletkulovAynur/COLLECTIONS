import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import EditingAvatarTemplate from "./EditingAvatarTemplate";
import './EditingAvatar.scss'
import {DefineAvatarUrl} from '../../utils/DefineAvatarUrl'
import { hiddenMobileFooterChangeAction } from "Store/reducers/components/mobileFooterReducer";

export default function EditingAvatar({sendAvatar}) {
  let reader = new FileReader()
  const dispatch = useDispatch()
  const {owner} = useSelector((state) => state.authReducer)
  const {loading} = useSelector((state) => state.userEditReducer)
  const {avatar} = owner

  const [previewImg, setPreviewImg] = useState(null)
  const [openPopupPreview, setOpenPopupPreview] = useState(false)
  const [loadAvatar, setLoadAvatar] = useState(null)

  const fileUploadHandler =(event) => {

    const files = [...event.target.files]

    if(!files.length) {
      return
    }
    const arrFiles = [...files]
    const mainImg = arrFiles[0]
    setLoadAvatar(mainImg)
    reader.readAsDataURL(mainImg)

    reader.onload = function () {
      setPreviewImg(reader.result)
      setOpenPopupPreview(true)
      dispatch(hiddenMobileFooterChangeAction(true))
    }
  }

  const deleteFile = () => {
    setPreviewImg(null)
    setOpenPopupPreview(false)
    dispatch(hiddenMobileFooterChangeAction(false))
  }

  const avatarUrl = DefineAvatarUrl(avatar)

  const changeUserAvatar = async () => {
    const formData = new FormData()
    formData.append('avatar', avatar)
    formData.append('file', loadAvatar)
    sendAvatar(formData)
    deleteFile()
  }

  return (
    <EditingAvatarTemplate
      loader={loading}
      fileUploadHandler={fileUploadHandler}
      previewImg={previewImg}
      changeUserAvatar={changeUserAvatar}
      deleteFile={deleteFile}
      avatarUrl={avatarUrl}
      openPopupPreview={openPopupPreview}
    />
  )
}