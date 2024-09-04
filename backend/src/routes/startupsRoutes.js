const express = require("express");
const StartupController = require("../controllers/StartupController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
router.get(
    "/startups/all",
    authMiddleware.authenticate,
    StartupController.getAll
);
router.get(
    "/startup/:id",
    authMiddleware.authenticate,
    StartupController.getOne
);

router.post(
  "/startups",
  authMiddleware.authenticate,
  authMiddleware.authorize('admin'),
  StartupController.registerOne
);
router.put(
  "/startups/:id",
  authMiddleware.authenticate,
  authMiddleware.authorize('admin'),
  StartupController.updateOne
);
router.delete(
  "/startups/:id",
  authMiddleware.authenticate,
  authMiddleware.authorize('admin'),
  StartupController.deleteOne,
);

module.exports = router;
