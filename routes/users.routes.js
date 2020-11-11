const {Router} = require('express')

const router = new Router()
const USER_MODEL = require('../models/user')

router.get('/get',
  async (req, res) => {

  try {
    const users = await USER_MODEL.find()
    res.json(users)
  } catch (e) {
    console.log(e)
  }
  }
)

router.put('/save-bookmark',
    async (req, res) => {
  const {bookmarkID, id} = req.body
  try {
    await USER_MODEL.update({_id: id}, {$addToSet: {bookmark: bookmarkID}})
    res.status(201).json({message: 'bookmark update'})
  } catch (e) {
    console.log(e)
  }
})

router.put('/delete-bookmark',
  async (req, res) => {
    const {bookmarkID, id} = req.body
    try {
      await USER_MODEL.update({_id: id}, {$pull: {bookmark: bookmarkID}})
      res.status(201).json({message: 'bookmark delete'})
    } catch (e) {
      console.log(e)
    }
  })

module.exports = router
