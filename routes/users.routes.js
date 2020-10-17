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

module.exports = router
