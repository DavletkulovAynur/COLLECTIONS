const { Router } = require("express");
const { check } = require("express-validator");

const authControllers = require("../controllers/auth.controllers");
const authMiddleware = require("../middleware/auth.middleware");

const router = Router();

router.post(
  "/register",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимальная длина пароля 8 символов").isLength({
      min: 8,
    }),
  ],
  authControllers.register
);

router.post(
  "/login",
  [
    check("email", "Введите корректный email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  authControllers.login
);

router.get("/auth", authMiddleware, authControllers.auth);

module.exports = router;
