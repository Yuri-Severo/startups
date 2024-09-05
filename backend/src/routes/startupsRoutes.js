const express = require("express");
const StartupController = require("../controllers/StartupController");
const router = express.Router();
const UserMiddleware = require("../middlewares/UserMiddleware");
router.get(
  "/startups/all",
  UserMiddleware.authenticate,
  StartupController.getAll
);
router.get(
  "/startup/:id",
  UserMiddleware.authenticate,
  StartupController.getOne
);

router.post(
  "/startups",
  UserMiddleware.authenticate,
  UserMiddleware.authorize("admin"),
  StartupController.registerOne
);
router.put(
  "/startups/:id",
  UserMiddleware.authenticate,
  UserMiddleware.authorize("admin"),
  StartupController.updateOne
);
router.delete(
  "/startups/:id",
  UserMiddleware.authenticate,
  UserMiddleware.authorize("admin"),
  StartupController.deleteOne
);

module.exports = router;
