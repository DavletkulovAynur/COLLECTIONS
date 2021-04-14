const path = require('path')
const fs = require('fs')
const USER_MODEL = require('../models/user')
const COLLECTION_MODEL = require('../models/collection')
const Uuid = require('uuid')

class UserControllers {
	async getUsers(req, res) {
		try {
			const users = await USER_MODEL.find()
			res.json(users)
		} catch (e) {
			console.log(e)
		}
	}

	async getUser(req, res) {
		try {
			const {userId} = req.body
			const user = await USER_MODEL.find({_id: userId})
			res.status(201).json({data: user})
		} catch (e) {
			res.status(400)
			console.log(e)
		}
	}

	async subscribeOnUser(req, res) {
		try {
			const {subscribeUserId} = req.body
			await USER_MODEL.update({_id: subscribeUserId}, {$addToSet: {subscribers: req.user.id}})
			await USER_MODEL.update({_id: req.user.id}, {$addToSet: {subscriptions: subscribeUserId}})
			res.status(201).json({message: 'Успешно'})
		} catch (e) {
			console.log('error', e)
		}
	}

	async unSubscribeUser(req, res) {
		try {
			const {subscribeUserId} = req.body
			await USER_MODEL.update({_id: subscribeUserId}, {$addToSet: {subscribers: req.user.id}})
			await USER_MODEL.update({_id: req.user.id}, {$pull: {subscriptions: subscribeUserId}})
			res.status(201).json({message: 'Успешно'})
		} catch (e) {
			console.log('error', e)
		}
	}

	async saveBookmark(req, res){
	const {bookmarkID} = req.body
		try {
			await USER_MODEL.update({_id: req.user.id}, {$addToSet: {bookmark: bookmarkID}})
			res.status(201).json({message: 'bookmark update'})
		} catch (e) {
			console.log(e)
		}
	}

	async deleteBookmark(req, res){
		const {bookmarkID} = req.body
		try {
			const test = await USER_MODEL.update({_id: req.user.id}, {$pull: {bookmark: bookmarkID}})
			res.status(201).json({message: 'bookmark delete'})
		} catch (e) {
			console.log(e)
		}
	}

	async loadAvatar(req, res) {
		try {
			const file = req.files.file
			const type = file.name.split('.').pop()
			const avatarName = Uuid.v4() + `.${type}`
			const user = await USER_MODEL.findOne({_id: req.user.id})

			let pathWay = path.join(__dirname, `../static/avatars/${avatarName}`)

			if(user.avatar) {
				fs.unlinkSync(path.join(__dirname, `../static/avatars/${user.avatar}`))
			}


			if(fs.existsSync(pathWay)) {
				// такой файл уже сущесттвует
			}

			file.mv(pathWay)

			try {
				await  USER_MODEL.updateOne({_id: req.user.id}, {$set: {avatar: avatarName}}, {upsert: true})
				await COLLECTION_MODEL.update({owner: req.user.id}, {$set: {authorAvatar: avatarName}}, {multi: true})
				res.status(201).json({message: 'Avatar update', status: true})
			} catch (e) {
				console.log(e)
			}

		} catch(e) {
			console.log(e)
			res.status(400).json({message: 'Error load Avatar'})
		}
	}

	async editUser(req, res) {
		try {
			const {username, place, description} = req.body
			await USER_MODEL.update({_id: req.user.id}, {username, place, description})

		} catch (e) {
			console.log('error', e)
		}
	}
}

module.exports = new UserControllers()