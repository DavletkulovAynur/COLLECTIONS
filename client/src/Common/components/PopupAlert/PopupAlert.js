import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './PopupAlert.scss'
import Popup from 'reactjs-popup'
import { popupAlertOpenAction } from 'Store/reducers/components/popupAlertReducer'

export function PopupAlert() {
    const dispatch = useDispatch()
    const {statePopupAlert, text, fn} = useSelector(state => state.popupAlertReducer)
    
    

    const handleClick = () => {
        fn()
        closePopupAlert()
    }

    const closePopupAlert = () => {
        dispatch(popupAlertOpenAction({
            statePopupAlert: false
        }))
    }

    return (
        <div>
            <Popup className='Popup-alert' open={statePopupAlert} onClose={() => {closePopupAlert()}}>
                <div className='Popup-alert'>
                    <section className='Popup-alert__title'>
                        {text}
                    </section>
                    <section className='Popup-alert__action-buttons'>
                        <button className='Button Button-root Button_undo-actions' onClick={closePopupAlert}>отмена</button>
                        <button className='Button Button-root Popup-alert__main-action-button' onClick={handleClick}>выйти</button>
                    </section>
                </div>
            </Popup>
        </div>
    )
}


