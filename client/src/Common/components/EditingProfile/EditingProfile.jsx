import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import './EditingProfile.scss'
import EditingProfileTemplate from './EditingProfileTemplate'
import {checkForm} from "../../utils/checkForm";

export default function EditingProfile({sendNewInfoProfile}) {
  const {owner} = useSelector((state) => state.authReducer)
  const {userName, description, place} = owner
  const {profileLoading} = useSelector((state) => state.userEditReducer)

  const [inputErrors, SetInputErrors] = useState({})




  const sendUserInformation = (nameInput, placeInput,aboutUserInput ) => {
    const userInformation = {
      username: nameInput.value,
      description: aboutUserInput.value
    }

    const thereAreMistakesInInputs = validationInputs(userInformation)

    if(!thereAreMistakesInInputs) {
      sendNewInfoProfile(userInformation)
    }
  }

  const validationInputs = (user) => {
    const listInputsHaveError = checkForm(user)
    if(Object.keys(listInputsHaveError).length !== 0) {
      SetInputErrors(listInputsHaveError)
      return true
    }
    return false
  }

  return (
    <EditingProfileTemplate sendUserInformation={sendUserInformation}
                            userName={userName}
                            description={description}
                            place={place}
                            profileLoading={profileLoading}
                            inputErrors={inputErrors}

    />
  );
}

