const {Schema, model} = require('mongoose')

const USER = ({
  email: {type: String, required: true},
  password: {type: String, required: true},
  username: {type: String},
  userCollection: {type: Array}
})

module.exports = model('USERS', USER)
