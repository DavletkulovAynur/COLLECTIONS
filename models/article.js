const {Schema, model} = require('mongoose')

const article = ({
  title: {type: String},
  img: {type: String},
  comments: {type: Array},
})

module.exports = model('Articles', article)
