const Router = require('express')
const router = new Router()
const uploadTest = require('../controllers/uploadTest')

const authMiddleware = require('../middleware/auth.middleware')

router.post('/load', authMiddleware,  uploadTest.loadImage)

module.exports = router