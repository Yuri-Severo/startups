const express = require("express");
const router = express.Router();
const StartupController = require("./controllers/StartupController");

router.get("/startups/:id", StartupController.getOne);
router.get("/startups", StartupController.getFirst);
router.get("/startups/recent", StartupController.getRecent);
router.post("/startups", StartupController.createOne);
router.put("/startups/:id", StartupController.updateOne);
router.delete("/startups/:id", StartupController.deleteOne);

module.exports = router;
