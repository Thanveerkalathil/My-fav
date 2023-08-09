const express = require("express");
const { uploadImages } = require("../controller/upload");
const { authUser } = require("../middleware/auth");
const imageUpload = require("../middleware/imageUpload");

const router = express.Router();

router.post("/uploadImages", imageUpload, uploadImages);

module.exports = router;
