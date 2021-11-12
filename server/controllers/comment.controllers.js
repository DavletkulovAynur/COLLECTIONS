const USER_MODEL = require("../models/user");
const COMMENT_MODEL = require("../models/comments");

class CommentControllers {
  async addComment(req, res) {
    try {
      const { description, id, title } = req.body;
      const user = await USER_MODEL.find({ _id: req.user.id });

      const collection = new COMMENT_MODEL({
        title,
        description,
        time: Date.now(),
        authorId: req.user.id,
        avatar: user[0].avatar,
        authorName: user[0].username,
        ownerCollection: id,
        ownerUser: req.user.id,
      });

      await collection.save();
      res
        .status(201)
        .json({
          message: "Collection update",
          status: true,
          resData: collection,
        });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getComment(req, res) {
    try {
      const { collectionId } = req.body;

      const comments = await COMMENT_MODEL.find({
        ownerCollection: collectionId,
      });

      res
        .status(201)
        .json({
          message: "ПОЛУЧИ на НВ СВОИ COMMENS КОЖАНЫЙ УБЛЮДОК",
          status: true,
          resData: comments,
        });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  // TODO доделать
  async removeComment(req, res) {
    try {
      const { commentId, collectionId } = req.body;
      await COMMENT_MODEL.remove({ _id: commentId });
      const comments = await COMMENT_MODEL.find({
        ownerCollection: collectionId,
      });

      res
        .status(201)
        .json({
          message: "Collection update",
          status: true,
          resData: comments,
        });
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }
}

module.exports = new CommentControllers();
