const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { sendMessage, allMessages } = require("../controllers/messageControllers");


const router = express.Router();

//send a new message
router.route("/").post(protect, sendMessage);

//fetch all messages for a chat
router.route("/:chatId").get(protect, allMessages);

module.exports = router;    