//Router - это класс ????
const {Router} = require('express')

// МОДЕЛЬ
const GAME_MODEL = require('../models/gameArticle')

const router = Router()

router.post('/add', async (req, res) => {
  const {name, img, publisher, description, comments} = req.body
  try {
    const game = new GAME_MODEL({
      name, img, publisher, description, comments
    })
    await game.save()
    res.status(201).json({message: 'game add', status: true})
  } catch (e) {
    res.status(500).json({message: "game don`t add", status: false})
  }
})

router.get('/get', async (req, res) => {
  try {
    const games = await GAME_MODEL.find({})
    res.json(games)
  } catch (e) {
    res.status(500).json({message: "error", status: false})
  }
})

router.put('/update', async (req, res) => {
  const {comments, id} = req.body
  try {
    await GAME_MODEL.update({_id: id},
            {$push: {comments:
                  { $each: [comments],
                    $position: 0 }
                }
            })
    res.status(201).json({message: 'Game update', status: true})
  } catch (e) {
    res.status(500).json({message: "error", status: false})
  }
})

router.post(
  '/get/id',
  async (req, res) => {
    const {id} = req.body
    try {
      const game = await GAME_MODEL.find({_id: id})
      res.json(game)
    } catch (e) {
      console.log('ошибка', e)
    }

  }
)

module.exports = router
