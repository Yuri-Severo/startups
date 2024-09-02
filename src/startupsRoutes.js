const express = require("express");
const router = express.Router();
const {getFirstFive,getLastFive,getById,registerNew,editById,deleteById} = require('./controllers/startupController')

router.get("/", getFirstFive);

router.get("/new_startups", getLastFive);

router.get("/startups/:id", getById);

router.post("/register_startup", registerNew);

router.put("/edit_startup/:id", editById);

router.delete("/delete_startup/:id", deleteById);

module.exports = router;
