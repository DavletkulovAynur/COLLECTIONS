const Router = require('express')
const router = new Router()
const uploadTest = require('../controllers/uploadTest')

router.post('/load', uploadTest.loadImage)

module.exports = router