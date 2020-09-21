const {Schema, model} = require('mongoose')

const game = ({
  name: {type: String},
  img: {type: String},
  publisher: {type: String},
  description: {type: String},
  comments: {type: Array},
})

module.exports = model('gameArticles', game)
