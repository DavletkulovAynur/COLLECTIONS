const {Router} = require('express')

const router = new Router()

const userControllers = require('../controllers/user.controllers')

router.get('/get', userControllers.getUsers)

router.put('/save-bookmark', userControllers.saveBookmark)

router.put('/delete-bookmark', userControllers.deleteBookmark)

module.exports = router
