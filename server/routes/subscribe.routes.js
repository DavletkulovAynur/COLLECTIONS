const {Router} = require('express')

const router = new Router()

const subscribeControllers = require('../controllers/subscribe.controller')
const authMiddleware = require('../middleware/auth.middleware')

router.post('/get-all-subscribe', authMiddleware, subscribeControllers.gelAllSubscribeUser)

module.exports = router