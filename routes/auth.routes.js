const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const USER_MODEL = require('../models/user')

const router = Router()

router.post('/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации'})
    }

    const {email, password, username} = req.body
    const candidate = await USER_MODEL.findOne({email})

    if(candidate) {
      return res.status(400).json({message: 'Такой пользователь уже существует'})
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new USER_MODEL({email, username, password: hashedPassword,  userCollection: [] })

    await user.save()
    res.status(201).json({message: 'Пользователь создан'})


  } catch (e) {
    res.status(500).json({message: 'ERROR'})
  }
})

router.post('/login',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при входе в систему'})
    }

    const {email, password} = req.body

    const user = await USER_MODEL.findOne({ email })

    if(!user) {
      return res.status(400).json({message: 'Пользователь не найден'})
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль, попробуйте снова'})
    }

    const token = jwt.sign(
      { userId: user.id},
      config.get('jwtSecret'),
      { expiresIn: '1h'}
    )

    res.json({ token, userId: user.id, user})
    
  } catch (e) {

  }
})

module.exports = router
