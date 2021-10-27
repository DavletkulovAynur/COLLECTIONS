const USER_MODEL = require('../models/user')
const COLLECTION_MODEL = require('../models/collection')
const COMMENT_MODEL = require('../models/comments')
const Uuid = require('uuid')

class CommentControllers {
  async addComment(req, res) {
	try {

      	const {description, id, title} = req.body
		const user = await USER_MODEL.find({_id: req.user.id})

		const collection = new COMMENT_MODEL({
        title,
        description,
        time: Date.now(),
        authorId: req.user.id,
        avatar: user[0].avatar,
        authorName: user[0].username,
        owner: req.user.id
      })

		await collection.save()
      
   
      res.status(201).json({message: 'Collection update', status: true})
    } catch (e) {
      res.status(500).json(e)
    }
  }


  // TODO доделать
  async removeComment(req, res) {
    try {
      const {collectionId, commentId} = req.body
      const allCollection = await COLLECTION_MODEL.find({_id: collectionId})

      const updateCommentsArr = allCollection[0].comments.filter((item) => item.idComment != commentId)

      await  COLLECTION_MODEL.updateMany({_id: collectionId}, {comments : updateCommentsArr})

      res.status(201).json({message: 'Collection update', status: true, resData: updateCommentsArr})
    } catch (e) {
      console.log(e)
      res.status(500).json(e)
    }
  }
}

module.exports = new CommentControllers()