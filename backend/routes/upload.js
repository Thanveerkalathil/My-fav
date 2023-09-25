const express = require("express");
const { uploadImages, listImages } = require("../controller/upload");
const { authUser } = require("../middleware/auth");
const imageUpload = require("../middleware/imageUpload");

const router = express.Router();

router.post("/uploadImages", authUser, imageUpload, uploadImages);
router.get("/listImages", listImages);

module.exports = router;
