const {validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const USER_MODEL = require('../models/user')
const config = require('config')
const emailService = require('../services/emailService')
const adapter = require('../services/userDataAdapter')

class AuthControllers {
	async register(req, res) {
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
			const user = new USER_MODEL({email, username, password: hashedPassword,  active: false})

			await user.save()

			const token = jwt.sign(
				{ 	id: user._id},
										config.get('jwtSecret'),
						{ expiresIn: '1h'}
			)

			const userAdapter = adapter(user)

			const resUser = {
				token, ...userAdapter
			}

			emailService(email, user)

			const filePath = path.join(__dirname, `../static/${user._id}`)

			if (!fs.existsSync(filePath)) {
				fs.mkdirSync(filePath)
			}

			res.status(201).json({resData: resUser, message: 'Добавлен новый пользователь'})


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
					{ id: user.id},
					config.get('jwtSecret'),
					{ expiresIn: '1h'}
			)

			const userAdapter = adapter(user)

      const resUser = {
				token, ...userAdapter
			}

      res.json({
	  		resData: resUser, message: 'Успешно вошли в систему'
      })

		} catch (e) {
			res.status(500).json({message: 'ERROR'})
		}
}

	async auth(req, res) {
		try {
			const user = await USER_MODEL.findOne({_id: req.user.id})

			const token = jwt.sign({id: user._id}, config.get("jwtSecret"), {expiresIn: "1h"})

			const userAdapter = adapter(user)

			const resUser = {
				token, userAdapter
			}

      return res.json({
				resData: resUser
      })

		} catch (e) {
			res.status(500).json({message: "Auth error"})
		}
	}
}

module.exports = new AuthControllers()
