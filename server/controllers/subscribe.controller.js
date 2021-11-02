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

  async subscribeOnUser(req, res) {
		try {
			const {subscribeUserId} = req.body
			await USER_MODEL.updateMany({_id: subscribeUserId}, {$addToSet: {subscribers: req.user.id}})
			await USER_MODEL.updateMany({_id: req.user.id}, {$addToSet: {subscriptions: subscribeUserId}})
			// вернуть подписки юзера 
			res.status(201).json({message: 'Успешно'})
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async unSubscribeUser(req, res) {
		try {
			const {subscribeUserId} = req.body
			await USER_MODEL.updateMany({_id: subscribeUserId}, {$pull: {subscribers: req.user.id}})
			await USER_MODEL.updateMany({_id: req.user.id}, {$pull: {subscriptions: subscribeUserId}})
			// вернуть подписки юзера 
			res.status(201).json({message: 'Успешно'})
		} catch (e) {
			res.status(500).json(e)
		}
	}
}

module.exports = new SubscribeController()