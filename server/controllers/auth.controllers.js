const {validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mailer = require('../nodemailer')


const fs = require('fs')
const path = require('path')

const USER_MODEL = require('../models/user')
const EMAIL_HASH_MODEL = require('../models/emailHash')
const config = require('config')
const randomBytes = require('randombytes')

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
		const user = new USER_MODEL({email, username, password: hashedPassword,  active: false})

		await user.save()
		const token = jwt.sign(
			{ 	id: user._id},
									config.get('jwtSecret'),
					{ expiresIn: '1h'}
		)

		const test = {
			token,
			active: user.active,
			subscriptions: user.subscriptions,
			userId: user._id,
			subscribers: user.subscribers,
			userName: user.username,
			bookmark: user.bookmark,
			email: user.email,
			avatar: user.avatar
		}


		const randomEmailHash = randomBytes(16).toString('hex')
		// Mailer
		const message = {
			to: email,
			subject: 'test',
			html: `
			<h2>Поздравляем</h2>
			ваш  email ${email}
			<a href="http://localhost:5000/authentication/email?id=${randomEmailHash}">test</a>
		`
		}
		mailer(message)
		//

		const emailHash = new EMAIL_HASH_MODEL({
			hash: randomEmailHash,
			owner: user._id
		})

		await emailHash.save()

		const filePath = path.join(__dirname, `../static/${user._id}`)

		if (!fs.existsSync(filePath)) {
			fs.mkdirSync(filePath)
		}

		// await fileService.createDir(user._id)
		res.status(201).json(test)


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
      // проблема
      res.json({
	  	token,
				active: user.active,
		  subscriptions: user.subscriptions,
        userId: user._id,
		  subscribers: user.subscribers,
        userName: user.username,
        bookmark: user.bookmark,
        email: user.email,
        avatar: user.avatar
      })

		} catch (e) {

		}
}

	async auth(req, res) {
		try {
			const user = await USER_MODEL.findOne({_id: req.user.id})

			const token = jwt.sign({id: user._id}, config.get("jwtSecret"), {expiresIn: "1h"})

      return res.json({
				token,
				active: user.active,
		  	subscriptions: user.subscriptions,
		  	subscribers: user.subscribers,
        userId: user._id,
        userName: user.username,
        bookmark: user.bookmark,
        email: user.email,
        avatar: user.avatar
      })

		} catch (e) {
			console.log(e, 'error')
			res.send({message: "Server error"})
		}
	}
}

module.exports = new AuthControllers()
