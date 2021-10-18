const USER_MODEL = require('../models/user')
const COLLECTION_MODEL = require('../models/collection')
const Uuid = require('uuid')

class CommentControllers {
  async addComment(req, res) {
    const {description, id, title} = req.body
    const user = await USER_MODEL.find({_id: req.user.id})

    const idComment = Uuid.v4()

    const commentObj = {
      idComment,
      title,
      description,
      time: Date.now(),
      authorId: req.user.id,
      // avatar: user[0].avatar,
      // authorName: user[0].username
    }



    try {
      await  COLLECTION_MODEL.updateMany({_id: id}, {$push: {comments : commentObj}})
      res.status(201).json({message: 'Collection update', status: true, resData: commentObj})
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