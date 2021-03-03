const {Router} = require('express')

const collectionControllers = require('../controllers/collection.controllers')

const router = Router()

router.post('/add', collectionControllers.addCollection)

router.get('/get-all',collectionControllers.getAllCollection)

router.post('/get',collectionControllers.getOwnerUserCollection)

router.put('/comment-update',collectionControllers.updateCollectionComment)

router.post('/search',collectionControllers.searchCollection)

module.exports = router



