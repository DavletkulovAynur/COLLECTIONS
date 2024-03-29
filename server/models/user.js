const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  active: {type: Boolean,},
  username: {type: String},
  bookmark: {type: []},
  subscriptions: {type: []},
  subscribers: {type: []},
  avatar: {type: String},
  place: {type: String},
  description: {type: String}
})

module.exports = model('Users', schema)
