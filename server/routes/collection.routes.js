const {Router} = require('express')

const collectionControllers = require('../controllers/collection.controllers')

const router = Router()
const authMiddleware = require('../middleware/auth.middleware')

router.post('/add', authMiddleware, collectionControllers.addCollection)
router.post('/delete', authMiddleware, collectionControllers.deleteCollection)

router.get('/get-all',collectionControllers.getAllCollection)

router.post('/get',collectionControllers.getOwnerUserCollection)
router.post('/get-collection-view', authMiddleware, collectionControllers.getCollectionView)

router.post('/search',collectionControllers.searchCollection)

router.post('/get-bookmark', authMiddleware, collectionControllers.getBookmarkCollection)

router.post('/get-subscribe-collection', authMiddleware, collectionControllers.getSubscribeCollection)

module.exports = router



