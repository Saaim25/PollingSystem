const express = require("express");
const router = express.Router();

const option_controller = require("../controllers/option_controller");

router.get("/getAllOptions", option_controller.getAllOptoins);
router.post("/createOption/:id", option_controller.createOption);
router.delete("/deleteOption/:id", option_controller.deleteOptoin);
router.get("/vote/:id", option_controller.vote);

module.exports = router;
