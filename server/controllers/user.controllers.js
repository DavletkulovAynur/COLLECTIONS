const USER_MODEL = require('../models/user')

class UserControllers {
async getUsers(req, res){
		try {
			const users = await USER_MODEL.find()
			res.json(users)
		} catch (e) {
			console.log(e)
		}
	}

async saveBookmark(req, res){
	const {bookmarkID, id} = req.body
		try {
			await USER_MODEL.update({_id: id}, {$addToSet: {bookmark: bookmarkID}})
			res.status(201).json({message: 'bookmark update'})
		} catch (e) {
			console.log(e)
		}
	}

async deleteBookmark(req, res){
		const {bookmarkID, id} = req.body
		try {
			await USER_MODEL.update({_id: id}, {$pull: {bookmark: bookmarkID}})
			res.status(201).json({message: 'bookmark delete'})
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = new UserControllers()