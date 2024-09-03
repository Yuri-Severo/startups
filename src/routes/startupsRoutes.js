const express = require("express");
const StartupController = require("../controllers/startupController");
const router = express.Router();

router.get(
    "/startups/all", 
    authMiddleware(), 
    StartupController.getAll
);
router.get(
    "/startup/:id", 
    authMiddleware(), 
    StartupController.getOne
);
router.get(
    "/startups", 
    authMiddleware(), 
    StartupController.getFirst
);
router.post(
  "/startups",
  authMiddleware("admin"),
  StartupController.registerOne
);
router.put(
  "/startups/:id",
  authMiddleware("admin"),
  StartupController.updateOne
);
router.delete(
  "/startups/:id",
  authMiddleware("admin"),
  StartupController.deleteOne
);

module.exports = router;
