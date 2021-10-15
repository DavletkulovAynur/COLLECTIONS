const {Schema, model, Types} = require('mongoose')

// TODO не понятно
const schema = new Schema ({
  nameCollection: {type: String},
  date: {type: String},
  dateTimestamp: {type: Number, required: true},
  title: {type: String, required: true},
  author: {type: String, required: true},
  authorAvatar: {type: String},
  mainImg: {type: String},
  publisher: {type: String},
  description: {type: String},
  comments: {
    idComment: {type: String},
    title: {type: String},
    description: {type: String},
    time: {type: Number},
    // test: {type: Types.ObjectId, ref: 'Users', required: true},
  },
  stylePin: {type: String},
  owner: {type: Types.ObjectId, ref: 'Users'}
})

module.exports = model('Collections', schema)
