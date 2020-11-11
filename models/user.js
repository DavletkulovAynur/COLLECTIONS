const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  username: {type: String},
  bookmark: {type: []}
})

module.exports = model('Users', schema)
