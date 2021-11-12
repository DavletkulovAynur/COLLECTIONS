const Router = require("express");
const authMiddleware = require("../middleware/auth.middleware");
AUTHENTICATION_EMAIL_CONTROLLERS = require("../controllers/authentication-email.controllers");

const router = new Router();

router.get("/email", AUTHENTICATION_EMAIL_CONTROLLERS.authenticationEmail);
router.post(
  "/email-resending",
  authMiddleware,
  AUTHENTICATION_EMAIL_CONTROLLERS.authenticationEmailResending
);

module.exports = router;
