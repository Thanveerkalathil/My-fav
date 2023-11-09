const express = require("express");
const {
  createPost,
  getAllPosts,
  comment,
  savePost,
} = require("../controller/post");
const { authUser } = require("../middleware/auth");

const router = express.Router();

router.post("/createPost", authUser, createPost);
router.get("/getAllPosts", authUser, getAllPosts);
router.put("/comment", authUser, comment);
router.put("/savePost/:id", authUser, savePost);

module.exports = router;
