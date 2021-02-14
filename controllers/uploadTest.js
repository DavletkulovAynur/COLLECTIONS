const path = require('path')
const File = require('../models/File')

class UploadTest {
  async loadImage(req, res) {
    try {
      const file = req.files.file
      console.log('req.user.id', req.user)


      let pathWay = path.join(__dirname, `../files/${file.name}`)

      file.mv(pathWay)

      const type = file.name.split('.').pop()
      const dbFile = new File({
        name: file.name,
        type,
      })

      await dbFile.save()

      res.json(dbFile)
    } catch (e) {
     console.log(e)
     return res.status(500).json({message: e})
    }
  }
}

module.exports = new UploadTest()