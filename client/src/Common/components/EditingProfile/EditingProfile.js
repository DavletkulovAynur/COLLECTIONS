import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import './EditingProfile.scss'
import EditingProfileTemplate from './EditingProfileTemplate'
import {checkForm} from "../../utils/checkForm";

export default function EditingProfile({sendNewInfoProfile}) {
  const {userName, description, place} = useSelector((state) => state.authReducer)
  const {loading} = useSelector((state) => state.personalPageReducer)

  const [inputErrors, SetInputErrors] = useState({})




  const sendUserInformation = (placeInput, nameInput,aboutUserInput ) => {
    const userInformation = {
      place: placeInput.value,
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
    if(Object.keys(listInputsHaveError).length != 0) {
      SetInputErrors(listInputsHaveError)
      return true
    }
    return false
  }

  return (
    <EditingProfileTemplate sendUserInformation={sendUserInformation}
                            loading={loading}
                            userName={userName}
                            description={description}
                            place={place}

    />
  );
}