import React from 'react'
import PersonalAreaTemplate from './personalArea.template'
import {useSelector} from 'react-redux'

export function PersonalArea() {
	const {avatar} = useSelector((state) => state.authReducer)
	const {myCollection} = useSelector(state => state.collectionReducer)

	async  function fileUploadHandler(event) {

		const formData = new FormData()
		const files = [...event.target.files]

		files.forEach((file) => {
			formData.append('file', file)
		})

		formData.append('avatar', avatar);

		const response = await fetch('http://localhost:5000/users/load-avatar', {
			method: 'post',
			body: formData,
			headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
		})
	}

	return (
		<>
			<PersonalAreaTemplate myCollection={myCollection} avatar={avatar} fileUploadHandler={fileUploadHandler}/>
		</>
	)
}
