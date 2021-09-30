import React from 'react'
import './ConfirmEmailPage.scss'
import {useDispatch} from "react-redux";

const ConfirmEmailPage = () => {
  const dispatch = useDispatch()
  return (
    <div className='Confirm-email'>
      <div className='Confirm-email__content'>
        <p className='Confirm-email__content-text'>На Ваш почтовый ящик отправлено сообщение, содержащее ссылку для подтверждения правильности e-mail адреса.</p>
      </div>
      <div>
        <button>Не пришло письмо</button>
        <button>вернуться на страницу регистрации</button>
      </div>
    </div>
  );
};

export default ConfirmEmailPage;