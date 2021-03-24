const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const cors = require('cors')

const app = express()

app.use(fileUpload({}))
app.use(cors())

app.use(express.json({ extentded: true}))
app.use(express.static('static'))

app.use('/auth', require('./routes/auth.routes'))
app.use('/collection', require('./routes/collection.routes'))
app.use('/users', require('./routes/users.routes'))



const PORT = config.get('port') || 5000
async function start() {
  try {
    await mongoose.connect(config.get('mongoUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`start ${PORT}`))
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()

