const express = require("express");
const router = express.Router();

const home_controller = require("../controllers/home_controller");

router.get("/question/", home_controller.getAllQue);
router.post("/question/createQue", home_controller.createQue);
router.delete("/question/deleteQue/:id", home_controller.deleteQue);

router.use("/options", require("./option"));

module.exports = router;
