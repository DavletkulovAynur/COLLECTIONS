const COLLECTION_MODEL = require('../models/collection')
const path = require('path')
const fs = require('fs')
const USER_MODEL = require('../models/user')
const Uuid = require('uuid')

class CollectionControllers {
	async addCollection(req, res){
		try {
			const file = req.files.file
			const {title, publisher, description, author} = req.body

			const type = file.name.split('.').pop()
			const mainImg = Uuid.v4() + `.${type}`

			let pathWay = path.join(__dirname, `../static/${req.user.id}/${mainImg}`)
			file.mv(pathWay)

			const collection = new COLLECTION_MODEL({
				nameCollection: 'Нужно прописать',
				title,
				author,
				publisher,
				description,
				mainImg,
				owner: req.user.id
			})

			await collection.save()

			res.status(201).json({message: 'success', status: true})

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

	async getOwnerUserCollection(req, res) {
		try {
		const {userId} = req.body
			const collection = await COLLECTION_MODEL.find({owner: userId})
			res.status(201).json(collection)
		} catch (e) {
			console.log(e)
		}
	}

	async getBookmarkCollection(req, res) {
		try {

			const {data } = req.body

			// Promise
			new Promise((resolve, reject) => {
				const allCollection = COLLECTION_MODEL.find()
				resolve(allCollection)
			}).then((allCollection) => {
				const bookmarkSave = allCollection.filter((i) => data.includes(String(i._id)))
				res.status(201).json(bookmarkSave)
			}).catch((error) => {
				console.log(error)
			})



		} catch (e) {
			console.log(e)
			// выводить ошибку
		}
	}

	async updateCollectionComment(req, res) {
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
