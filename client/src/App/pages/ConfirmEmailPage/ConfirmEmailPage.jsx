import React, {useState} from 'react'
import './ConfirmEmailPage.scss'
import {useDispatch} from "react-redux";
import {useInterval} from "../../../Common/utils/hooks/useInterval.hook";
import {HeaderLogo} from "../../../Common/components/Header/templates/HeaderLogo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {emailResendingAction, logoutAction} from "../../../Store/actions/action";

const ConfirmEmailPage = () => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(2)
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true)
  const [disabledButton, setDisabledButton] = useState(true)

  useInterval(() => {
    // Your custom logic here
    if(count === 1) {
      stopTimer()
    }
    setCount(count - 1);
  }, isRunning ? delay : null);

  function stopTimer() {
    setDisabledButton(false)
    setIsRunning(false)
    setCount(10)
  }

  function startTimer() {
    setCount(10)
    setIsRunning(true)
  }

  const logOut = () => {
    dispatch(logoutAction())
    localStorage.removeItem('token')
  }

  function test() {
    dispatch(emailResendingAction())
  }

  return (
    <div className='Confirm-email'>
      <div className='Confirm-email__content'>
        <div className='Confirm-email__logo'>
          <HeaderLogo/>
        </div>

        <p className='Confirm-email__content-text'>
          С адреса <span className='Confirm-email__content-text-email'>ainurikda@gmail.com</span> отправлено письмо со ссылкой-подтверждением.
        </p>

        <div className='Confirm-email__buttons'>
          <button onClick={test} disabled={disabledButton} className='Button Button-root Confirm-email__re-request'>Перезапросить подтвержение</button>
          <div className={`Confirm-email__timer ${isRunning ? null : 'Confirm-email__timer_none'}`}>Повторная отправка через {count}</div>
        </div>

        <div onClick={logOut} className='Confirm-email__return-auth-page-button-box'>
          <FontAwesomeIcon icon="chevron-left" color="#888888"/>
          <button className='Confirm-email__return-auth-page-button'>вернуться на страницу регистрации</button>
        </div>


      </div>
    </div>
  );
};

export default ConfirmEmailPage;