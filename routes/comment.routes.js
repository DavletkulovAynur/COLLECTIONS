const {Router} = require('express')

const router = Router()

const Articles = require('../models/article')

router.post(
  '/add',
  async (req, res) => {
    const {title, img, comments} = req.body
    try {
      const article = new Articles({
        img,
        title,
        comments
      })
      await article.save()
      res.status(201).json({message: 'Article creat', status: true})
    } catch (e) {
      res.status(500).json({message: "Article don`t creat", status: false})
    }
  }
)

router.put('/update', async (req, res) => {
  const {comments, id} = req.body
  try {
    await Articles.update({_id: id}, {$push: {comments : [comments]}})
    res.status(201).json({message: 'Article update'})
  } catch (e) {
    
  }
})

router.get(
  '/get',
  async (req, res) => {
    try {
      const article = await Articles.find({})
      res.json(article)
    } catch (e) {
      console.log('ошибка', e)
    }

  }
)



module.exports = router
