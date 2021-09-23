import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import './EditingProfile.scss'
import EditingProfileTemplate from './EditingProfileTemplate'
import {editAvatarAction, editUserAction} from '../../../Store/actions/action'

import {useInput} from '../../utils/hooks/input.hook'
import {checkForm} from '../../utils/checkForm'
import {inputClear} from '../../utils/inputClear'

// Как загружать
export default function EditingProfile() {
  const {userName, description, place} = useSelector((state) => state.authReducer)
  const {loading} = useSelector((state) => state.personalPageReducer)


  const [nameInputError, setNameInputError] = useState(false)





  const sendUserInformation = () => {
    // const userInformation = {
    //   place: placeInput.value,
    //   username: nameInput.value,
    //   description: aboutUserInput.value
    // }
    //
    // const objErrors = checkForm(userInformation)
    //
    // const {username} = objErrors
    // const errorСhecking = Object.keys(objErrors).length;
    //
    // setNameInputError(username)
    //
    // if(!errorСhecking) {
    //   inputClear([nameInput, aboutUserInput, placeInput])
    //   dispatch(editUserAction(userInformation))
    // }
  }

  return (
    <EditingProfileTemplate

                             sendUserInformation={sendUserInformation}
                             loading={loading}

                             nameInputError={nameInputError}

                            userName={userName}
                            description={description}
                            place={place}

    />
  );
}