const {validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const fs = require('fs')
const path = require('path')

const USER_MODEL = require('../models/user')
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
		const filePath = path.join(__dirname, `../files/${user._id}`)

		if (!fs.existsSync(filePath)) {
			fs.mkdirSync(filePath)
		}

		// await fileService.createDir(user._id)
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
					{ userId: user.id},
					config.get('jwtSecret'),
					{ expiresIn: '1h'}
			)

			res.json({ token, userId: user.id, user})

		} catch (e) {

		}
}
}

module.exports = new AuthControllers()