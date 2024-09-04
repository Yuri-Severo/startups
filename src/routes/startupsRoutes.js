const express = require("express");
const StartupController = require("../controllers/startupController");
const router = express.Router();

router.get(
    "/startups/all",
    StartupController.getAll
);
router.get(
    "/startup/:id",
    StartupController.getOne
);
router.get(
    "/startups",
    StartupController.getFirst
);
router.post(
  "/startups",
  StartupController.registerOne
);
router.put(
  "/startups/:id",
  StartupController.updateOne
);
router.delete(
  "/startups/:id",
  StartupController.deleteOne
);

module.exports = router;
