const {Router} = require('express')

const collectionControllers = require('../controllers/collection.controllers')

const router = Router()
const authMiddleware = require('../middleware/auth.middleware')

router.post('/add', authMiddleware, collectionControllers.addCollection)

router.get('/get-all',collectionControllers.getAllCollection)

router.post('/get',collectionControllers.getOwnerUserCollection)
router.post('/get-collection-view', collectionControllers.getCollectionView)

router.put('/comment-update',collectionControllers.updateCollectionComment)

router.post('/search',collectionControllers.searchCollection)

router.post('/get-bookmark', authMiddleware, collectionControllers.getBookmarkCollection)

module.exports = router



