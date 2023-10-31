const express = require("express");
const { reactPost } = require("../controller/react");
const { authUser } = require("../middleware/auth");

const router = express.Router();
router.put("/reactPost", authUser, reactPost);

module.exports = router;
