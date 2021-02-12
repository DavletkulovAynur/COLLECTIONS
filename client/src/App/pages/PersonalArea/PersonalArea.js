import React from 'react'
import {useHttp} from "../../../Common/utils/hooks/http.hook";
import PersonalAreaTemplate from "./personalArea.template";

import axios from 'axios'

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


		// const response = await request('http://localhost:5000/uploadTest/load', 'POST', formData, {
		// 	'Content-Type' : "multipart/form-data"
		// })
		const response = await axios.post('http://localhost:5000/uploadTest/load', formData)

		// const response = await fetch('http://localhost:5000/uploadTest/load', {
		// 	method: 'post',
		// 	body: formData
		// })

		console.log(response)


	}
	return (
		<PersonalAreaTemplate fileUploadHandler={fileUploadHandler}/>
	)
}