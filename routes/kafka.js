const express = require("express");
const router = express.Router();

const kafkaController = require("../controller/kafka");

router.get("/topics", kafkaController.getTopics);

router.get("/topics/:topic", kafkaController.getTopic);

module.exports = router;
