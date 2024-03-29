const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const commentControllers = require("../controllers/comment.controllers");

const router = Router();

router.put("/add", authMiddleware, commentControllers.addComment);
router.put("/remove", authMiddleware, commentControllers.removeComment);
router.post("/get", authMiddleware, commentControllers.getComment);

module.exports = router;
