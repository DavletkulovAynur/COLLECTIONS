const { Router } = require("express");

const router = new Router();

const subscribeControllers = require("../controllers/subscribe.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post(
  "/get-all-subscribe",
  authMiddleware,
  subscribeControllers.gelAllSubscribeUser
);

router.post(
  "/subscribe-on-user",
  authMiddleware,
  subscribeControllers.subscribeOnUser
);

router.post(
  "/unsubscribe-on-user",
  authMiddleware,
  subscribeControllers.unSubscribeUser
);

module.exports = router;
