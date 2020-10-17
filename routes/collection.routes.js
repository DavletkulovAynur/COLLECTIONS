const {Router} = require('express')

const COLLECTION_MODEL = require('../models/collection')

const router = Router()

router.post('/add',
  async (req, res) => {
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
    console.log(collection)
    await collection.save()
  } catch (e) {
    console.log(e)
  }
})

router.get('/get-all',
  async (req, res) => {
    try {
      const collection = await COLLECTION_MODEL.find()
      res.json(collection)
    } catch (e) {
      console.log(e)
    }
  })

router.get('/get',
  async (req, res) => {
    const collection = await COLLECTION_MODEL.find({owner: '5f881f3a520e1c1db4ab7197'})
    res.json(collection)
  try {

  } catch (e) {
    console.log(e)
  }
})

router.put('/comment-update',
  async (req, res) => {
    const {comments, id} = req.body
    try {
      await COLLECTION_MODEL.update({_id: id}, {$push: {comments : [comments]}})
      res.status(201).json({message: 'Article update'})
    } catch (e) {

    }
  })

module.exports = router



