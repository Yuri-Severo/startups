// routes/authRoutes.js
const express = require("express");
const UserController = require("../controllers/UserController");
const UserMiddleware = require("../middlewares/UserMiddleware");
const router = express.Router();

router.get(
  "/users",
  UserMiddleware.authenticate,
  UserMiddleware.authorize("admin"),
  UserController.getAll
);
router.delete(
  "/user/:id",
  UserMiddleware.authenticate,
  UserMiddleware.authorize("admin"),
  UserController.deleteOne
);
router.post("/user/register", UserController.register);
router.post("/user/login", UserController.login);

module.exports = router;
