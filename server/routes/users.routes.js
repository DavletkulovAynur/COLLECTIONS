const {Router} = require('express')

const router = new Router()

const userControllers = require('../controllers/user.controllers')
const authMiddleware = require('../middleware/auth.middleware')

router.get('/get', userControllers.getUsers)

router.put('/save-bookmark', userControllers.saveBookmark)

router.put('/delete-bookmark', userControllers.deleteBookmark)

router.post('/load-avatar', authMiddleware, userControllers.loadAvatar)

module.exports = router
