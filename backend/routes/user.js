const express = require("express");
const {
  register,
  activateAccount,
  login,
  auth,
  sendVerification,
  findUser
} = require("../controller/user");
const { authUser } = require("../middleware/auth");
const router = express.Router();
router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/sendVerification", authUser, sendVerification);
router.post("/findUser", findUser);

module.exports = router;
