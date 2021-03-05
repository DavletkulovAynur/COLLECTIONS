import React from 'react'
import {useHttp} from "../../../Common/utils/hooks/http.hook";
import PersonalAreaTemplate from "./personalArea.template";

export function PersonalArea() {

	const {error, request, clearError} = useHttp()

	async  function fileUploadHandler(event) {
		const formData = new FormData()
		const files = [...event.target.files]

		files.forEach((file) => {
			formData.append('file', file)
		})

		formData.append('name', 'Aynur');
		formData.append('email', 'email');

		const response = await fetch('http://localhost:5000/uploadTest/load', {
			method: 'post',
			body: formData,
			headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
		})

		console.log('response', response)


	}
	return (
		<PersonalAreaTemplate fileUploadHandler={fileUploadHandler}/>
	)
}
