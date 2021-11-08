const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(fileUpload({}))
app.use(cors())

app.use(express.json({ extentded: true}))
app.use(express.static('static'))

app.use('/auth', require('./routes/auth.routes'))
app.use('/collection', require('./routes/collection.routes'))
app.use('/users', require('./routes/users.routes'))
app.use('/authentication', require('./routes/authentication-email.routes'))
app.use('/comment', require('./routes/comment.routes'))
app.use('/subscribe', require('./routes/subscribe.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../', 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
  })
}



const PORT = config.get('port') || 4000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen('4000', () => console.log(`start ${PORT}`))
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()


