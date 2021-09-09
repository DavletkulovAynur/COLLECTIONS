import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {removeShowMessageAction} from '../../../Redux/actions/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ShowMessage.scss'


export function ShowMessage({showMessage,
                            text = 'This is a success message!',
                            severity = 'success'}) {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(showMessage)
        test()
    }, [showMessage])

    const close = (event, reason) => {
      setOpen(false)
      // dispatch(removeShowMessageAction())
    }

    const test = () => {
      setTimeout(() => {
        setOpen(false)
      }, 3000)
    }

    return (
      <>
        {open
          ? <div className={`Show-message_root Show-message Show-message_${severity}`}>
              <div className="Show-message_text">{text}</div>
              <button onClick={close} className='Show-message__action'>
                <FontAwesomeIcon icon="times" style={{ color: '#fff' }}/>
              </button>
            </div>
          : null }
      </>
    )
}
