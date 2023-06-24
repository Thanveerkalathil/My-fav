const express = require("express");
const {
  register,
  activateAccount,
  login,
  auth,
  sendVerification,
} = require("../controller/user");
const { authUser } = require("../middleware/auth");
const router = express.Router();
router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/sendVerification", authUser, sendVerification);

module.exports = router;
