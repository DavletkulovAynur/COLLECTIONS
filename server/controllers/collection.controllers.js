const COLLECTION_MODEL = require('../models/collection')
const USER_MODEL = require('../models/user')
const path = require('path')
const fs = require('fs')
const Uuid = require('uuid')

class CollectionControllers {
	async addCollection(req, res){
		try {
			const file = req.files.file
			const {title, publisher, description} = req.body
			const user = await USER_MODEL.find({_id: req.user.id})


			const type = file.name.split('.').pop()
			const mainImg = Uuid.v4() + `.${type}`

			let pathWay = path.join(__dirname, `../static/${req.user.id}/${mainImg}`)
			file.mv(pathWay)
			const avatar = user[0].avatar ? user[0].avatar : ''

			const collection = new COLLECTION_MODEL({
				nameCollection: 'Нужно прописать',
				title,
				author: user[0].username,
				authorAvatar: avatar,
				publisher,
				description,
				mainImg,
				owner: req.user.id
			})

			await collection.save()

			res.status(201).json({message: 'success', status: true})

			} catch (e) {
				console.log('error', e)
			res.status(400).json(e)
			}
		}

	async getAllCollection(req, res){
		try {
			const collection = await COLLECTION_MODEL.find()
			res.status(201).json(collection)
		} catch (e) {
			console.log(e)
		}
	}

	async getCollectionView(req, res) {
		try {
			const {collectionId} = req.body
			const collection = await COLLECTION_MODEL.find({_id: collectionId})
			res.status(201).json({collection})
		} catch (e){
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
		const {description, id, title} = req.body


		const user = await USER_MODEL.find({_id: req.user.id})

		const commentObj = {
			title,
			description,
			time: Date.now(),
			authorId: req.user.id,
			authorAvatar: user[0].avatar,
			authorName: user[0].username
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

	async getSubscribeCollection(req, res) {
		try {
			//переделать
			const {userSubscribe} = req.body
			console.log(userSubscribe)
			// let test = []
			// userSubscribe.map(async (id) => {
			// 	const user = await COLLECTION_MODEL.find({owner: id})
			// 	test.push(user)
			// })

			async function processArray(array) {
				let test = []
				for(const id of array) {
					const user = await COLLECTION_MODEL.find({owner: id})
					test.push(user)
				}
				return test
			}

			const val = processArray(userSubscribe)

			val.then((arr) => {
				res.status(201).json({data: arr})
			})



		} catch (e) {
			console.log('error', e)
		}
	}
}

module.exports = new CollectionControllers()
