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
      authorAvatar: user[0].avatar,
      authorName: user[0].username
    }



    try {
      await  COLLECTION_MODEL.update({_id: id}, {$push: {comments : commentObj}})
      res.status(201).json({message: 'Collection update', status: true, resData: commentObj})
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async removeComment(req, res) {
    const {id} = req.body
    const user = await USER_MODEL.find({_id: req.user.id})

    // получаем ID commit, удаляем, возвращаем обновленный массив
    // сразу не обновляем (подумать)
    try {
      const collection = await COLLECTION_MODEL.find({_id: id})

      // res.status(201).json({message: 'Collection update', status: true, resData: commentObj})
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

module.exports = new CommentControllers()