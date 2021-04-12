const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  hash: {type: String, required: true},
  owner: {type: Types.ObjectId, ref: 'Users'}
})

module.exports = model('EmailHash', schema)
