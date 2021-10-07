const COLLECTION_MODEL = require('../models/collection')
const USER_MODEL = require('../models/user')
const path = require('path')
const fs = require('fs')
const Uuid = require('uuid')

const imagemin = require('imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

const imageminPngquant = require('imagemin-pngquant');

const timestamp = require('time-stamp');

class CollectionControllers {
	async addCollection(req, res){
		try {
			const file = req.files.file
			const {title, description, stylePin} = req.body
			const user = await USER_MODEL.find({_id: req.user.id})

			//
			const type = file.name.split('.').pop()
			const mainImg = Uuid.v4() + `.${type}`
			//

			let originalImgPathWay = path.join(__dirname, `../static/${req.user.id}/original`)
			let pathWay = path.join(__dirname, `../static/${req.user.id}/original/${mainImg}`)

			if(!fs.existsSync(originalImgPathWay)) {
				fs.mkdir(originalImgPathWay, () => {
					file.mv(pathWay)
				})
			} else {
				file.mv(pathWay)
			}

			await imagemin(
				[`${path.join(__dirname, `../static/${req.user.id}/original/${mainImg}`)}`],
				{
				destination: `${path.join(__dirname, `../static/${req.user.id}/compressed`)}`,
				plugins: [
					imageminJpegRecompress({quality: 'low'}),
					imageminPngquant({
						quality: [0.1, 0.1]
					})
				]
			});

			const avatar = user[0].avatar ? user[0].avatar : ''
			const collection = new COLLECTION_MODEL({
				nameCollection: 'Нужно прописать',
				title,
				date: timestamp('DD/MM/YYYY'),
				author: user[0].username,
				authorAvatar: avatar,
				description,
				mainImg,
				stylePin,
				owner: req.user.id
			})

			await collection.save()

			res.status(201).json({message: 'success', status: true})

			} catch (e) {
			res.status(400).json(e)
			}
		}

	async getAllCollection(req, res){
		try {
			const collection = await COLLECTION_MODEL.find()
			res.status(201).json({resData: collection})
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async getCollectionView(req, res) {
		try {
			const {collectionId} = req.body
			const collection = await COLLECTION_MODEL.find({_id: collectionId})
			res.status(201).json({resData: collection})
		} catch (e){
			res.status(500).json(e)
		}
	}

	async getOwnerUserCollection(req, res) {
		try {
		const {userId} = req.body
			const collection = await COLLECTION_MODEL.find({owner: userId})
			res.status(201).json({resData: collection})
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async getBookmarkCollection(req, res) {
		try {
			const {data } = req.body
			new Promise((resolve, reject) => {
				const allCollection = COLLECTION_MODEL.find()
				resolve(allCollection)
			}).then((allCollection) => {
				const bookmarkSave = allCollection.filter((i) => data.includes(String(i._id)))
				res.status(201).json({resData: bookmarkSave})
			}).catch((error) => {
				console.log(error)
			})
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async searchCollection(req, res){
		try {
			const {value} = req.body

			const data = await COLLECTION_MODEL.find()

			const searchResult = data.filter((collection) => {
				return !collection.title.toLowerCase().indexOf(value.toLowerCase())
			})

			res.status(201).json({message: 'Collection update', status: true, resData: searchResult})

		} catch (e) {
			res.status(500).json(e)
		}
	}

	async getSubscribeCollection(req, res) {
		try {
			//переделать
			const {userSubscribe} = req.body

			async function processArray(array) {
				let test = []
				for(const id of array) {
					const user = await COLLECTION_MODEL.find({owner: id})
					test.push(user[0])
				}
				return test
			}

			const val = processArray(userSubscribe)

			val.then((arr) => {
				res.status(201).json({resData: arr})
			})



		} catch (e) {
			res.status(500).json(e)
		}
	}
}

module.exports = new CollectionControllers()
