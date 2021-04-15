const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
  nameCollection: {type: String, required: true},
  date: {type: String},
  title: {type: String, required: true},
  author: {type: String, required: true},
  authorAvatar: {type: String},
  mainImg: {type: String},
  publisher: {type: String},
  description: {type: String},
  comments: {type: Array},
  owner: {type: Types.ObjectId, ref: 'Users'}
})

module.exports = model('Collections', schema)
