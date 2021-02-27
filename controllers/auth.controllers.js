const {validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const fs = require('fs')
const path = require('path')

const USER_MODEL = require('../models/user')
const FILE_MODEL = require('../models/File')
const fileService = require('../services/fileService')
const config = require('config')

class AuthControllers {
	async register(req, res){
	try {
		const errors = validationResult(req)

		if(!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
				message: 'Некорректные данные при регистрации'})
		}

		const {email, password, username} = req.body
		const candidate = await USER_MODEL.findOne({email})

		if(candidate) {
			return res.status(400).json({message: 'Такой пользователь уже существует'})
		}

		const hashedPassword = await bcrypt.hash(password, 12)
		const user = new USER_MODEL({email, username, password: hashedPassword })

		await user.save()

		await fileService.createDir(new FILE_MODEL({user: user._id, name: ''}))
		res.status(201).json({message: 'Пользователь создан'})


	} catch (e) {
		res.status(500).json({message: 'ERROR'})
	}
}

	async login(req, res){
		try {
			const errors = validationResult(req)

			if(!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Некорректные данные при входе в систему'})
			}

			const {email, password} = req.body

			const user = await USER_MODEL.findOne({ email })

			if(!user) {
				return res.status(400).json({message: 'Пользователь не найден'})
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if(!isMatch) {
				return res.status(400).json({ message: 'Неверный пароль, попробуйте снова'})
			}

			const token = jwt.sign(
					{ userId: user._id},
					config.get('jwtSecret'),
					{ expiresIn: '1h'}
			)

			res.json({ token,
				userId: user._id,
				userName: user.username,
				bookmark: user.bookmark,
				email: user.email})

		} catch (e) {

		}
}

	async auth(req, res) {
		try {
			const user = await USER_MODEL.findOne({_id: req.user.userId})
			const token = jwt.sign({id: user._id}, config.get("jwtSecret"), {expiresIn: "1h"})
			return res.json({
				token
			})
		} catch (e) {
			console.log(e, 'error')
			res.send({message: "Server error"})
		}
	}
}

module.exports = new AuthControllers()