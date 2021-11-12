const { Router } = require("express");

const router = new Router();

const userControllers = require("../controllers/user.controllers");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/get", userControllers.getUsers);

router.post("/get-user", userControllers.getUser);

router.post("/get-user-collection", userControllers.getUserCollection);

router.put("/save-bookmark", authMiddleware, userControllers.saveBookmark);

router.put("/delete-bookmark", authMiddleware, userControllers.deleteBookmark);

router.post("/load-avatar", authMiddleware, userControllers.loadAvatar);

router.post("/edit-user", authMiddleware, userControllers.editUser);

module.exports = router;
