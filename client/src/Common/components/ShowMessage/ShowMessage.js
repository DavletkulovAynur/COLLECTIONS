import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {removeShowMessageAction} from '../../../Redux/actions/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ShowMessage.scss'


export function ShowMessage({showMessage,
                            text = 'This is a success message!',
                            severity = 'success'}) {

    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);

    let timerID


    // ERROR (таймер работает неправильно)
    useEffect(() => {
      setVisible(showMessage)
      if(showMessage) {
        timerID = setTimeout(() => {
          removeMessage()
        }, 3000)
      }
    }, [showMessage])

    const removeMessage = () => {
      clearTimeout(timerID);
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
