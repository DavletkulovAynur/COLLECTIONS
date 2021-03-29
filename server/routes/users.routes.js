const {Router} = require('express')

const router = new Router()

const userControllers = require('../controllers/user.controllers')
const authMiddleware = require('../middleware/auth.middleware')

router.get('/get', userControllers.getUsers)

router.post('/get-user', userControllers.getUser)

router.put('/save-bookmark', authMiddleware, userControllers.saveBookmark)

router.put('/delete-bookmark', authMiddleware, userControllers.deleteBookmark)

router.post('/load-avatar', authMiddleware, userControllers.loadAvatar)

router.post('/subscribe-on-user', authMiddleware, userControllers.subscribeOnUser)

module.exports = router
