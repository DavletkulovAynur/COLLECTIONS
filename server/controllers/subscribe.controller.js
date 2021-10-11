const USER_MODEL = require('../models/user')

class SubscribeController {
  async gelAllSubscribeUser(req, res) {
    try {

      const{subscribers = [], subscriptions= []} = req.body
      const users = await USER_MODEL.find()

      const onlySubscribers = users.filter((item) => subscribers.includes(String(item._id)))
      const onlySubscriptions = users.filter((item) => subscriptions.includes(String(item._id)))

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