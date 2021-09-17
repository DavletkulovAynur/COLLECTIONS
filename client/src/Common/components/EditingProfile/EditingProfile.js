import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './EditingProfile.scss'
import EditingProfileTemplate from './EditingProfileTemplate'
import {editAvatarAction, editUserAction, openPopupChangeAvatar} from '../../../Store/actions/action'
import {DefineAvatarUrl} from '../../utils/DefineAvatarUrl'
import {useInput} from '../../utils/hooks/input.hook'
import {checkForm} from '../../utils/checkForm'
import {inputClear} from '../../utils/inputClear'

// Как загружать
export default function EditingProfile() {
  const dispatch = useDispatch()
  let reader = new FileReader()
  const {avatar, userName, description, place} = useSelector((state) => state.authReducer)
  const {statePopup, loading} = useSelector((state) => state.personalPageReducer)

  const [previewImg, setPreviewImg] = useState()
  const [loadAvatar, setLoadAvatar] = useState(null)

  // Inputs
  const nameInput = useInput(userName)
  const aboutUserInput = useInput(description)
  const placeInput = useInput(place)
  const [nameInputError, setNameInputError] = useState(false)

  const handleClose = () => {
    dispatch(openPopupChangeAvatar(false))
  };

  const fileUploadHandler = async (event) => {
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
    dispatch(editAvatarAction(formData))
    setPreviewImg('')
  }

  const deleteFile = () => {
    setPreviewImg('')
  }

  const avatarUrl = DefineAvatarUrl()

  const sendUserInformation = () => {
    const userInformation = {
      place: placeInput.value,
      username: nameInput.value,
      description: aboutUserInput.value
    }

    const objErrors = checkForm(userInformation)

    const {username} = objErrors
    const errorСhecking = Object.keys(objErrors).length;

    setNameInputError(username)

    if(!errorСhecking) {
      inputClear([nameInput, aboutUserInput, placeInput])
      dispatch(editUserAction(userInformation))
    }
  }

  return (
    <EditingProfileTemplate fileUploadHandler={fileUploadHandler}
                             handleClose={handleClose}
                             deleteFile={deleteFile}
                             sendAvatar={sendAvatar}
                             sendUserInformation={sendUserInformation}
                             loading={loading}
                             avatarUrl={avatarUrl}
                             open={statePopup}
                             nameInputError={nameInputError}
                             previewImg={previewImg}
                             nameInput={nameInput}
                             aboutUserInput={aboutUserInput}
                             placeInput={placeInput}
    />
  );
}