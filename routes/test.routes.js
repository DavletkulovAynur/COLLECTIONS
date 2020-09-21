// Router позволяет создавать мортируемые обработчики маршрутов
const {Router} = require('express')

const router = Router()

const User = require('../models/testUser')

router.post(
  '/test',
  async (req, res) => {
    const {name, age} = req.body
    try {
      const user = new User({
        name,
        age
      })
      await user.save()
      res.status(201).json({message: 'Пользователь создан'})
    } catch (error) {
      res.status(500).json({message: "Что-то пошло не так auth.routes"})
    }
    
  } 
)

router.get(
  '/contacts',
  async (req, res) => {
    try {
      const Users = await User.find({})
      res.json(Users)
    } catch (e) {
        console.log('ошибка', e)
    }

  }
)

module.exports = router


