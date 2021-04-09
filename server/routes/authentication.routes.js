const Router = require('express')
const USER_MODEL = require('../models/user')


const router = new Router()

router.get('/email', async (req, res) => {
  try {
    const id = req.query.id
    console.log('id', id)
    // const user = await USER_MODEL.find({_id: id})
    await USER_MODEL.update({_id: id}, {active: true})
    res.send('hello world');
  } catch (e) {
    console.log('Error', e)
  }
})

module.exports = router