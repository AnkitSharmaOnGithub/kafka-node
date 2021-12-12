const express = require("express");
const router = express.Router();

const messagesController = require("../controller/messages");

router.post("/createMessage", messagesController.createMessage);

module.exports = router;
