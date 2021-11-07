import React from 'react'
import InputForm from 'Common/components/InputForm/InputForm'

const RegistrationTemplate = ({changeStateLogin, register, onSubmit, handleSubmit, errors}) => {

	const inputs = [
		{
			placeholder: 'Имя пользователя',
			label: 'username',
			required: true,
			pattern: '',
			minLength: ''
			
		},
		{
			placeholder: 'Эл. почта',
			label: 'email',
			required: true,
			pattern: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
			minLength: ''
		},
		{
			placeholder: 'Пароль',
			label: 'password',
			type: 'password',
			required: true,
			pattern: '',
			minLength: 8
		}
	]
  
return (
    <div className='Auth_registration'>
		<h2 className='Auth_title'>
			Новый аккаунт
		</h2>

		<form onSubmit={handleSubmit(onSubmit)}>
			{inputs.map((item, index) => {
				const {placeholder, label, type, required, pattern, minLength} =item
				return (
					<div className='Auth_input' key={index}>
						<InputForm 	errors={errors} 
									required={required} 
									placeholder={placeholder} 
									register={register} 
									label={label} 
									type={type} 
									pattern={pattern}
									minLength={minLength}	
									/>
						{label === 'password'
							? errors.password && <p className='Auth_input-error-pass-text'>Пароль должен содержать не менее 8 символов</p>
							: null 
						}
					</div>
				)
			})}
			<button className='Button Button-root' type="submit">
				Создать
			</button>
		</form>

		<div className='Auth_footer'>
			У вас уже есть аккаунт?  <span className='link' onClick={() => changeStateLogin()}>Войти</span>
		</div>
    </div>
  )
}

export default RegistrationTemplate