const {Schema, model} = require('mongoose')

const auth = ({
  email: {type: String, required: true},
  password: {type: String, required: true},
  name: {type: String},
})

module.exports = model('users', auth)
