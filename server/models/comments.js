const {Schema, model, Types} = require('mongoose');


const schema = new Schema ({
    idComment: {type: String},
    title: {type: String},
    description: {type: String},
    time: {type: Number},
    authorId: {type: String},
    avatar: {type: String},
    authorName: {type: String},
    ownerCollection: {type: Types.ObjectId, ref: 'Collection'},
    ownerUser: {type: Types.ObjectId, ref: 'Users'}
})
  
  module.exports = model('Comments', schema)
  