const express = require("express");
const { reactPost, getReacts } = require("../controller/react");
const { authUser } = require("../middleware/auth");

const router = express.Router();
router.put("/reactPost", authUser, reactPost);
router.get("/getReacts/:id", authUser, getReacts);

module.exports = router;
