const Router = require('express')
const USER_MODEL = require('../models/user')
const EMAIL_HASH_MODEL = require('../models/emailHash')
const jwt = require('jsonwebtoken')



const router = new Router()

router.get('/email', async (req, res) => {
  try {
    const hash = req.query.id
    const email = await EMAIL_HASH_MODEL.findOne({hash: hash})
    if (email) {
      // const token = jwt.sign({id: email.owner}, config.get("jwtSecret"), {expiresIn: "1h"})
      const user = await USER_MODEL.findOne({_id: email.owner})
      await USER_MODEL.update({_id: email.owner}, {active: true})


      res.redirect('http://localhost:3000/')
      // res.json({
      //   token,
      //   active: user.active,
      //   subscriptions: user.subscriptions,
      //   subscribers: user.subscribers,
      //   userId: user._id,
      //   userName: user.username,
      //   bookmark: user.bookmark,
      //   email: user.email,
      //   avatar: user.avatar
      // })
      await EMAIL_HASH_MODEL.remove({hash: hash})
    }
    res.send('hello')


  } catch (e) {
    console.log('Error', e)
  }
})

module.exports = router