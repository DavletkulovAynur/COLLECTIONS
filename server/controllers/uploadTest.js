const path = require('path')
const File = require('../models/File')
const USER_MODEL = require('../models/user')
const fs = require('fs')

class UploadTest {
  async loadImage(req, res) {
    try {
      const file = req.files.file
      console.log('req.user.id', file)
      let pathWay = path.join(__dirname, `../files/${req.user.id}/avatar/${file.name}`)

      if(fs.existsSync(pathWay)) {
        // такой файл уже сущесттвует
      }

      file.mv(pathWay)


      const type = file.name.split('.').pop()
      // const dbFile = new File({
      //   name: file.name,
      //   type,
      //   user: req.user.id,
      //   path: pathWay
      // })


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
