const express = require("express");
const { createPost } = require("../controller/post");
const { authUser } = require("../middleware/auth");

const router = express.Router();

router.post("/createPost", authUser, createPost);

module.exports = router;
