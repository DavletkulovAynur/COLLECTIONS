const COLLECTION_MODEL = require('../models/collection')

class CollectionControllers {
	async addCollection(req, res){
		try {
			const {nameCollection, title, img, publisher, description, userId,  author} = req.body

			const collection = new COLLECTION_MODEL({
				nameCollection,
				title,
				img,
				author,
				publisher,
				description,
				userId,
				owner: userId
			})

			await collection.save()
			} catch (e) {
				console.log(e)
			}
		}

	async getAllCollection(req, res){
		try {
		const collection = await COLLECTION_MODEL.find()
		res.json(collection)
		} catch (e) {
			console.log(e)
		}
	}

	async getOwnerUserCollection(req, res){
		try {
		const {userId} = req.body
			const collection = await COLLECTION_MODEL.find({owner: userId})
			res.status(201).json(collection)
		} catch (e) {
			console.log(e)
		}
	}

	async updateCollectionComment(req, res){
		const {description, id, title, author} = req.body
			const commentObj = {
				title,
				description,
				time: Date.now(),
				author
			}
		try {
			await  COLLECTION_MODEL.update({_id: id}, {$push: {comments : commentObj}})
			res.status(201).json({message: 'Collection update', status: true, commentObj})
		} catch (e) {

		}
	}

	async searchCollection(req, res){
		try {
			const {value} = req.body

			const data = await COLLECTION_MODEL.find()

			const searchResult = data.filter((collection) => {
				return !collection.title.toLowerCase().indexOf(value.toLowerCase())
			})

			res.status(201).json({message: 'Collection update', status: true, searchResult})

		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = new CollectionControllers()