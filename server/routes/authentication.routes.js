const Router = require('express')
const USER_MODEL = require('../models/user')
const EMAIL_HASH_MODEL = require('../models/emailHash')



const router = new Router()

router.get('/email', async (req, res) => {
  try {
    const hash = req.query.id
    const email = await EMAIL_HASH_MODEL.findOne({hash: hash})
    await USER_MODEL.update({_id: email.owner}, {active: true})
    res.redirect('http://localhost:3000/')
  } catch (e) {
    console.log('Error', e)
  }
})

module.exports = router