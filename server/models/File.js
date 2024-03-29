const {model, Schema, ObjectId} = require('mongoose')

const File = new Schema({
	name: {type: String, required: true},
	type: {type: String, required: true},
	user: {type: ObjectId, ref: 'User'},
  path: {type: String, required: true},
})

module.exports = model('File', File)
