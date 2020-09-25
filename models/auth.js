const {Schema, model} = require('mongoose')

const auth = ({
  email: {type: String},
  password: {type: String}
})

module.exports = model('users', auth)
