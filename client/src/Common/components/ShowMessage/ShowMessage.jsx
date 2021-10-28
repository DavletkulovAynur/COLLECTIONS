import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ShowMessage.scss'
import {removeShowMessageAction} from "../../../Store/reducers/components/showMessageReducer";
import { useInterval } from 'Common/utils/hooks/useInterval.hook';


export function ShowMessage({showMessage,
                            text = 'This is a success message!',
                            severity = 'success'}) {

    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);

    let timerID

    useEffect(() => {
      setVisible(showMessage)
      if(showMessage) {
        timerID = setTimeout(() => {
          removeMessage()
        }, 3000)
      }
      return () => clearTimeout(timerID);

    }, [showMessage])

   

    const removeMessage = () => {
      setVisible(false)
      dispatch(removeShowMessageAction())
    }



    return (
      <>
        {visible
          ? <div className={`Show-message_root Show-message Show-message_${severity}`}>
              <div className="Show-message_text">{text}</div>
              <button onClick={removeMessage} className='Show-message__action'>
                <FontAwesomeIcon icon="times" style={{ color: '#fff' }}/>
              </button>
            </div>
          : null }
      </>
    )
}
