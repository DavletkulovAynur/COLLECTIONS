const path = require('path')
const File = require('../models/File')
const USER_MODEL = require('../models/user')
const fs = require('fs')
const Uuid = require('uuid')

class UploadTest {
  async loadImage(req, res) {
    try {
      const file = req.files.file
      const type = file.name.split('.').pop()


      const avatarName = Uuid.v4() + `.${type}`
      let pathWay = path.join(__dirname, `../static/${avatarName}`)

      if(fs.existsSync(pathWay)) {
        // такой файл уже сущесттвует
      }

      file.mv(pathWay)



      try {
        await  USER_MODEL.updateOne({_id: req.user.id}, {$set: {avatar: { name: file.name, type, path: pathWay}}}, {upsert: true})
        res.status(201).json({message: 'Avatar update', status: true})
      } catch (e) {
        console.log(e)
      }

      // await dbFile.save()

      // res.json(dbFile)

    } catch (e) {
     console.log(e)
     return res.status(500).json({message: e})
    }
  }
}

module.exports = new UploadTest()
