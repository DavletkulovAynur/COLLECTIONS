

class UploadTest {
  async loadImage(req, res) {
    try {
      console.log('this', req.body)
      return res.status(200).json({message: 'super'})
    } catch (e) {
     console.log(e)
     return res.status(500).json({message: e})
    }
  }
}

module.exports = new UploadTest()