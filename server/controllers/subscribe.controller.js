const USER_MODEL = require('../models/user')

class SubscribeController {
  async gelAllSubscribeUser(req, res) {
    try {

      const{userId} = req.body
      const user = await USER_MODEL.find({_id: userId})
      const users = await USER_MODEL.find()

      const onlySubscribers = users.filter((item) => user[0].subscribers.includes(String(item._id)))
      const onlySubscriptions = users.filter((item) => user[0].subscriptions.includes(String(item._id)))

      res.status(201).json({resData: {
          onlySubscribers,
          onlySubscriptions
        }})
    } catch (e) {
      console.log('ERROR', e)
    }
  }
}

module.exports = new SubscribeController()